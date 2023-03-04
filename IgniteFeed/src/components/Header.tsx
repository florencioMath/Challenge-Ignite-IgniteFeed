import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={igniteLogo} alt='Logotipo do Ignite' />
        <h1>Ignite Feed</h1>
      </div>
    </header>
  );
}
