import { useCallback, useEffect, useMemo, useRef } from 'react';

import mic from '../../../../assets/images/mic.svg';
import smile from '../../../../assets/images/smile.svg';
import { DialButton } from '../DialButton/DialButton';
import { request, formatText, debounce } from '../../../../utils';
import {
  dialingDebounceTimeout,
  minDigitsLengthForCombination,
  t9_converterEndpoint
} from '../../../../constants';
import { usePromiseResolve } from '../../../../hooks/usePromiseResolve';

import style from './Keyboard.module.css';

const dialButtonsConfig = [
  [ { id: '1', text: '' }, { id: '2', text: 'abc' }, { id: '3', text: 'def' } ],
  [ { id: '4', text: 'ghi' }, { id: '5', text: 'jkl' }, { id: '6', text: 'mno' } ],
  [ { id: '7', text: 'pqrs' }, { id: '8', text: 'tuv' }, { id: '9', text: 'wxyz' } ],
  [ { id: '*', text: '' }, { id: '0', text: '' }, { id: '#', text: '' } ]
];

const toolset = (
  <>
    <span>
      <img src={mic} />
    </span>
    <span>GIF</span>
    <span>
      <img src={smile} />
    </span>
  </>
);

interface IKeyboard {
  digits: string;
  onDial(value: string | ((value: string) => string)): void;
}

export function Keyboard({ onDial, digits }: IKeyboard) {
  const suggestionsContainerRef = useRef<HTMLDivElement>(null);

  const [ suggestions = [] ] = usePromiseResolve<string[]>(() => {
    if (!digits.length) {
      return Promise.resolve();
    }

    return request(formatText(t9_converterEndpoint, { digits }));
  }, [ digits ]);


  const handleButtonClick = useMemo(() => debounce((id: string) => {
    onDial((prevValue) => prevValue.concat(id));
  }, dialingDebounceTimeout), [ onDial ]);

  const buttons = useMemo(() => {
    return dialButtonsConfig.map((rowButtons, i) => {
      return (
        <div
          key={`${style.row}_${i}`}
          className={style.row}
        >
          {
            rowButtons.map(({ id, text }, idx) => (
              <DialButton
                key={`${id}_${text}_${idx}`}
                title={id}
                subtitle={text}
                onClick={handleButtonClick}
              />
            ))
          }
        </div>
      );
    });
  }, []);

  const handleWordClick = useCallback(({ currentTarget }) => {
    onDial(currentTarget.dataset.word || '');
  }, [ onDial ]);

  const suggestionsList = useMemo(() => suggestions.map((word) => (
    <div
      key={word}
      data-word={word}
      onClick={handleWordClick}
    >
      {word}
    </div>
  )), [ suggestions, handleWordClick ]);

  const suggestionsContent = (
    <div
      ref={suggestionsContainerRef}
      className={style.suggestions}
    >
      {suggestionsList}
    </div>
  );

  useEffect(() => {
    const scrollContainer = suggestionsContainerRef.current;

    if (digits.length >= minDigitsLengthForCombination && scrollContainer) {
      const scrollHorizontally = (event: WheelEvent) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
      };

      scrollContainer.addEventListener('wheel', scrollHorizontally);

      return () => scrollContainer.removeEventListener('wheel', scrollHorizontally);
    }
  }, [ digits ]);

  return (
    <div className={style.keyboard}>
      <div className={style.header}>
        {
          suggestions.length
            ? suggestionsContent
            : toolset
        }
      </div>
      {buttons}
    </div>
  );
}
