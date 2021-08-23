import styles  from './Layout.module.scss'
import Footer from './Footer'

export default function Layout({children}) {
    return <div className={styles.wrapper}>
        <header className={styles.header + ' centered'}>
            Welcome to Gidro altar!
        </header>
        <nav className={styles.menu}>
            <ul className={styles.menu_list + ' centered'}>
                <li><a href="/">Статьи</a></li>
                <li><input></input></li>
                <li><a href="/events">Курсы</a></li>
                <li><a href="/events">Конспекты</a></li>
            </ul>
        </nav>
        <main className={styles.main}>
            {children}
        </main>
        <Footer />
    </div>
}
