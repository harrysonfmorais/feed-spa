import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/harrysonfmorais.png',
      name: 'Harryson Morais',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera', },
      {type: 'paragraph', content: 'Acabei de subir uma projeto', },
      {type: 'link', content: '#reactjs'}
    ],
    publishedAt: new Date('2023-01-06 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera', },
      {type: 'paragraph', content: 'Acabei de subir uma projeto', },
      {type: 'link', content: '#reactjs'}
    ],
    publishedAt: new Date('2023-01-02 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
