import { useCallback } from 'react';

import style from './DialButton.module.css';

interface IButton {
  title: string;
  subtitle: string;
  onClick(id: string): void;
}

const animation = [
  { transform: 'scale(0.9)' },
  { transform: 'scale(1)' }
];

const animationopts = { duration: 150 };

export function DialButton({
  title,
  subtitle = '',
  onClick
}: IButton) {
  const handleClick = useCallback(({ currentTarget }) => {
    onClick(title);

    currentTarget.animate(animation, animationopts);
  }, [ onClick ]);

  return (
    <div
      onClick={handleClick}
      className={style['dial-btn']}
    >
      <div>{title}</div>
      <div className={style['dial-btn--subtitle']}>
        {subtitle}
      </div>
    </div>
  );
}
