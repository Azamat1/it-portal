import styles  from './Footer.module.scss'

export default function Footer() {
    return <footer className={styles.footer}>
            <ul>
                <li>О сайте</li>
                <li>Об авторах</li>
                <li>Контакты</li>
            </ul>
        </footer>
}