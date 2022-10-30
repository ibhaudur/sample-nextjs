import Image from 'next/image'
import Meta from '../Component/meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
<Meta title='Kirshi'/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Kirshi!</a>
        </h1>
        </main>
    </div>
  )
}
