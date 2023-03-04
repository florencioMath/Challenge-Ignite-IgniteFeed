import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://media.licdn.com/dms/image/D4D16AQExBqYQu77h3w/profile-displaybackgroundimage-shrink_350_1400/0/1677951621377?e=1683158400&v=beta&t=1tAZgWvnYkwCXQU2F2fgO0r4PD5Ff9WjOqXoua7ni5Q'
      />

      <div className={styles.profile}>
        <Avatar src='https://github.com/florencioMath.png' />
        <strong>Matheus Florêncio</strong>
        <span>Software Engineer</span>
        <span>
          Github:{' '}
          <a
            className={styles.githubLink}
            href='https://github.com/florencioMath'
            target='_blank'
          >
            florencioMath
          </a>
        </span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
