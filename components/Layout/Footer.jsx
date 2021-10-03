import Link from 'next/link'
import styles  from './Footer.module.scss'

export default function Footer() {
    return <footer className={styles.footer}>
            <ul className={styles.menu_list}>
                <li><Link href="/"><a>О сайте</a></Link></li>
                <li><Link href="/"><a>Об авторах</a></Link></li>
                <li><Link href="/"><a>Контакты</a></Link></li>
            </ul>
        </footer>
}