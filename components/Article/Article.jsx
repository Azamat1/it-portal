import styles  from './Article.module.scss'

export default function Article() {
    return <article className={styles.article}>
              <h2>Node js</h2>
              <div>
                  <img src="/Article-nodeJs.webp" />
                  <p>Краткое описание</p>
                  <div className={styles.actions}>
                      <button>В корзину</button>
                      <button>В избранное</button>
                  </div>
              </div>
    </article>
}