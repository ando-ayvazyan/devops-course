import logo from '../../assets/images/logo.svg';

import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="T9 logo" className={style.logo} />
      <h1 className={style.title}>T9 online keyboard</h1>
    </header>
  );
}
