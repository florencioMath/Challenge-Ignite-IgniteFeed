import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/florencioMath.png',
      name: 'Matheus Florêncio',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de finalizar esse desafio da trilha Ignite do ReactJS, é sum app que pode ser feito comentários nos posts, aplaudir (dar likes 👍) e excluir comentários. 🚀',
      },
      {
        type: 'link',
        content: 'github.com/florencioMath/Challenge-Ignite-IgniteFeed',
      },
    ],
    publishedAt: new Date('2023-02-10 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Faaaaala Devs 👋' },
      {
        type: 'paragraph',
        content:
          'Deem uma olhada no Ignite da Rocketseat! 🚀 O Ignite é um programa de aceleração para devs, focado em preparar profissionais completos(as) para o mercado, treinando skills técnicas e comportamentais de forma intensiva e prática. O Ignite é dividido em trilhas de conhecimento não-dependentes onde nos aprofundamos em uma tecnologia específica.',
      },
      { type: 'link', content: 'rocketseat.com.br/ignite' },
    ],
    publishedAt: new Date('2023-02-20 21:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala Devs 👋' },
      {
        type: 'paragraph',
        content:
          'Deem uma olhada nesse evento online e gratuito da Rocketseat! 🚀 Aprenda tudo que você precisa saber para iniciar seus estudos e decolar na carreira em programação. Nos dias 13 a 15 de março de 2023.',
      },
      {
        type: 'link',
        content: 'rocketseat.com.br/eventos/do-zero-a-primeira-vaga',
      },
    ],
    publishedAt: new Date('2023-02-28 21:40:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
