import styles  from './Article.module.scss'

export default function Article() {
    return <article className={styles.article}>
              <h2>Node js</h2>
              <div className={styles.content}>
                  <img src="/Article-nodeJs.webp" className={styles.img}/>
                  <p>Краткое описание</p>
              </div>
              <div className={styles.actions}>
                   <button>В корзину</button>
                   <button>В избранное</button>
              </div>
    </article>
}