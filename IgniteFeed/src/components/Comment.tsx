import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

interface CommentProps {
  id: number;
  content: string;
  likes: number;
  onLike: (id: number) => void;
  onDeleteComment: (id: number) => void;
}

export function Comment({
  id,
  content,
  likes,
  onDeleteComment,
  onLike,
}: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    onLike(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/florencioMath.png'
        alt=''
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Florêncio</strong>
              <time
                title='27 de Fevereiro às 21:38h '
                dateTime='2023-02-27 21:38:13'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
