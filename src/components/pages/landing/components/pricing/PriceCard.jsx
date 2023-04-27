import styles from './PriceCard.module.scss';

export const Card = ({ data: { id, price, title, items } }) => (
      <article className={styles.card}>
            <div className={`${styles.card__side} ${styles.card__side__front}`}>
                  <div
                        className={`${styles.card__picture} ${styles.card__picture__}`}
                  >
                        &nbsp;
                  </div>
                  <h4 className={styles.card__heading}>
                        <span
                              className={`${styles.card__heading_span} ${styles.card__heading_span__}`}
                        >
                              {title}
                        </span>
                  </h4>
                  <div className={styles.card__details}>
                        <ul>
                              {items?.map((item, i) => (
                                    <li key={i}>{item}</li>
                              ))}
                        </ul>
                  </div>
            </div>
            <div
                  //   className={`card__side card__side--back card__side--back-${id}`}
                  className={`${styles.card__side} ${styles.card__side__back} ${styles.card__side__back_}`}
            >
                  <div className={styles.card__cta}>
                        <div className={styles.card__price_box}>
                              <p className={styles.card__price_only}>Only</p>
                              <p className={styles.card__price_value}>
                                    {price}
                              </p>
                        </div>
                        <a href="#popup" className="btn btn--white">
                              Book now!
                        </a>
                  </div>
            </div>
      </article>
);
