import { useCallback, useState, useMemo, useEffect } from 'react';

import { Keyboard } from './components/Keyboard/Keyboard';
import arrowUp from '../../assets/images/arrow-up.svg';
import { minDigitsLengthForCombination, t9_replacementRegexp } from '../../constants';

import style from './Smartphone.module.css';

export function Smartphone() {
  const [ showScrollGuide, setShowScrollGuide ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = useCallback(({ target: { value } }) => {
    setInputValue(value);
  }, []);

  const digits = useMemo(() => inputValue.replace(t9_replacementRegexp, ''), [ inputValue ]);

  useEffect(() => {
    if (!showScrollGuide && digits.length >= minDigitsLengthForCombination) {
      setShowScrollGuide(true);
    }
  }, [ showScrollGuide, digits.length ]);

  return (
    <div className={style.device}>
      <div
        className={`${style['scroll-guide']} ${showScrollGuide ? style.visible : ''}`}
      >
        You can use mouse wheel to scroll suggestions list.
      </div>
      <div className={style.set}>
        <div className={style.indicator} />
        <div className={style.speaker} />
      </div>
      <div className={style.screen}>
        <h3 className={style.disclaimer}>Click buttons 2-9</h3>
        <div>
          <div className={style['input-block']}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <img src={arrowUp} />
          </div>
          <Keyboard
            digits={digits}
            onDial={setInputValue}
          />
        </div>
      </div>
      <div className={style['power-btn']} />
      <div className={style['vol-up']} />
      <div className={style['vol-down']} />
      <div className={style['main-btn']}></div>
    </div>
  );
}
