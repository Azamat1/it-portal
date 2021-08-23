import Link from 'next/link'
import styles  from './Layout.module.scss'
import Footer from './Footer'

export default function Layout({children}) {
    return <div className={styles.wrapper}>
        <header className={styles.header + ' centered'}>
            Welcome to Gidro altar!
        </header>
        <nav className={styles.menu}>
            <ul className={styles.menu_list + ' centered'}>
                <li><Link href="/"><a>Статьи</a></Link></li>
                <li><input></input></li>
                <li><Link href="/"><a>Курсы</a></Link></li>
                <li><Link href="/"><a>Конспекты</a></Link></li>
            </ul>
        </nav>
        <main className={styles.main}>
            {children}
        </main>
        <Footer />
    </div>
}
