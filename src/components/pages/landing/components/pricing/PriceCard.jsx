import './PriceCard.scss';

export const Card = ({ data: { id, price, title, items } }) => (
      <article className="card">
            <div className="card__side card__side--front">
                  <div className={`card__picture card__picture--${id}`}>
                        &nbsp;
                  </div>
                  <h4 className="card__heading">
                        <span
                              className={`card__heading-span card__heading-span--${id}`}
                        >
                              {title}
                        </span>
                  </h4>
                  <div className="card__details">
                        <ul>
                              {items?.map((item, i) => (
                                    <li key={i}>{item}</li>
                              ))}
                        </ul>
                  </div>
            </div>

            <div
                  className={`card__side card__side--back card__side--back-${id}`}
            >
                  <div className="card__cta">
                        <div className="card__price-box">
                              <p className="card__price-only">Only</p>
                              <p className="card__price-value">{price}</p>
                        </div>
                        <a href="#popup" className="btn btn--white">
                              Book now!
                        </a>
                  </div>
            </div>
      </article>
);
