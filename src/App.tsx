import './App.css';
import { useState } from 'react';

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmitReview = () => {
    if (selectedRating === 0) {
      alert('Please select a rating');
      return;
    }
    if (reviewText.trim() === '') {
      alert('Please write a review');
      return;
    }

    const newReview = {
      id: Date.now(),
      rating: selectedRating,
      text: reviewText,
      date: new Date().toLocaleDateString()
    };

    setReviews([newReview, ...reviews]);
    setSelectedRating(0);
    setReviewText('');
  };

  return (
    <div className="app-shell">
      <nav className="topbar">
        <div>
          <div className="brand">PrimeLaneDigital</div>
          <p className="slogan">design.build.grow</p>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="page-content">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Luxury digital strategy</p>
            <h1>PrimeLaneDigital</h1>
            <p className="hero-text">
              Premium digital experiences designed to elevate brands and professional businesses with precision,
              confidence, and a luxurious edge.
            </p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href="#services">Explore Services</a>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-header">
            <span>Services</span>
            <h2>Strategic digital offerings for local brands</h2>
          </div>
          <div className="cards plans">
            <article className="card plan">
              <h3>Basic</h3>
              <div className="price"><span className="price-once-off">R100 once-off</span> • <span className="price-monthly">R100 / month</span></div>
              <ul className="feature-list">
                <li>1-page website</li>
                <li>WhatsApp button</li>
                <li>Trading hours</li>
                <li>Mobile friendly</li>
              </ul>
              <div className="plan-delivery">Delivery: 7 days</div>
              <a className="btn plan-button" href="https://wa.me/27694667944?text=Hello%20PrimeLaneDigital%2C%20I%20would%20like%20the%20Basic%20package." target="_blank" rel="noreferrer">🛒 Buy Basic</a>
            </article>

            <article className="card plan featured">
              <div className="badge">Most popular</div>
              <h3>Standard</h3>
              <div className="price"><span className="price-once-off">R100 once-off</span> • <span className="price-monthly">R300 / month</span></div>
              <ul className="feature-list">
                <li>5-page website</li>
                <li>Photo gallery</li>
                <li>Social media links</li>
                <li>Google Business</li>
                <li>Basic SEO</li>
              </ul>
              <div className="plan-delivery">Delivery: 14 days</div>
              <a className="btn plan-button" href="https://wa.me/27694667944?text=Hello%20PrimeLaneDigital%2C%20I%20would%20like%20the%20Standard%20package." target="_blank" rel="noreferrer">🛒 Buy Standard</a>
            </article>

            <article className="card plan">
              <h3>Premium</h3>
              <div className="price"><span className="price-once-off">R100 once-off</span> • <span className="price-monthly">R400 / month</span></div>
              <ul className="feature-list">
                <li>Online store</li>
                <li>3D products</li>
                <li>PayFast payments</li>
                <li>Full SEO</li>
                <li>Monthly report</li>
                <li>Unlimited updates</li>
              </ul>
              <div className="plan-delivery">Delivery: 25 days</div>
              <a className="btn plan-button" href="https://wa.me/27694667944?text=Hello%20PrimeLaneDigital%2C%20I%20would%20like%20the%20Premium%20package." target="_blank" rel="noreferrer">🛒 Buy Premium</a>
            </article>
          </div>
        </section>

        <section className="section" id="professional-services">
          <div className="section-header">
            <span>Professional Business Services</span>
            <h2>Same premium packages for professional businesses</h2>
          </div>
          <div className="cards plans">
            <article className="card plan">
              <h3>Basic</h3>
              <div className="price"><span className="price-once-off">R200 once-off</span> • <span className="price-monthly">R200 / month</span></div>
              <ul className="feature-list">
                <li>1-page website</li>
                <li>WhatsApp button</li>
                <li>Trading hours</li>
                <li>Mobile friendly</li>
              </ul>
              <div className="plan-delivery">Delivery: 7 days</div>
              <a className="btn plan-button" href="https://wa.me/27694667944?text=Hello%20PrimeLaneDigital%2C%20I%20would%20like%20the%20Professional%20Basic%20package." target="_blank" rel="noreferrer">🛒 Buy Basic</a>
            </article>

            <article className="card plan featured">
              <div className="badge">Most popular</div>
              <h3>Standard</h3>
              <div className="price"><span className="price-once-off">R200 once-off</span> • <span className="price-monthly">R400 / month</span></div>
              <ul className="feature-list">
                <li>5-page website</li>
                <li>Photo gallery</li>
                <li>Social media links</li>
                <li>Google Business</li>
                <li>Basic SEO</li>
              </ul>
              <div className="plan-delivery">Delivery: 14 days</div>
              <a className="btn plan-button" href="https://wa.me/27694667944?text=Hello%20PrimeLaneDigital%2C%20I%20would%20like%20the%20Professional%20Standard%20package." target="_blank" rel="noreferrer">🛒 Buy Standard</a>
            </article>

            <article className="card plan">
              <h3>Premium</h3>
              <div className="price"><span className="price-once-off">R200 once-off</span> • <span className="price-monthly">R500 / month</span></div>
              <ul className="feature-list">
                <li>Online store</li>
                <li>3D products</li>
                <li>PayFast payments</li>
                <li>Full SEO</li>
                <li>Monthly report</li>
                <li>Unlimited updates</li>
              </ul>
              <div className="plan-delivery">Delivery: 25 days</div>
              <a className="btn plan-button" href="https://wa.me/27694667944?text=Hello%20PrimeLaneDigital%2C%20I%20would%20like%20the%20Professional%20Premium%20package." target="_blank" rel="noreferrer">🛒 Buy Premium</a>
            </article>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-header">
            <span>About</span>
            <h2>Designed for businesses that demand refinement</h2>
          </div>
          <p className="about-copy">
            We build website for local clothing brands and buisnesses
          </p>
        </section>

        <section className="section rating-section" id="ratings">
          <div className="section-header">
            <span>Reviews</span>
            <h2>Share your rating and what you think of us</h2>
          </div>
          <div className="rating-card">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  className={selectedRating >= star ? 'star-active' : ''}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              className="review-input"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button
              className="btn btn-primary submit-review"
              type="button"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
          </div>
        </section>

        <section className="section reviews-display" id="client-reviews">
          <div className="section-header">
            <span>Client Reviews</span>
            <h2>What our clients say</h2>
          </div>
          <div className="reviews-list">
            {reviews.length === 0 ? (
              <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="review-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= review.rating ? 'star-filled' : 'star-empty'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-header">
            <span>Contact</span>
            <h2>Let’s build something exceptional together.</h2>
          </div>
          <p className="contact-copy">
            Share your vision and we’ll shape a luxury digital experience created for your audience.
          </p>
          <div className="contact-links">
            <a className="btn btn-primary" href="https://wa.me/27694667944" target="_blank" rel="noreferrer">WhatsApp: 069 466 7944</a>
            <a className="btn btn-secondary" href="mailto:primelane.digitalagency@gmail.com">primelane.digitalagency@gmail.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
