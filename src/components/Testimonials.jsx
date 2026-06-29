import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const reviews = [
    { name: 'John Doe', text: 'Amazing food and atmosphere!', rating: 5 },
    { name: 'Jane Smith', text: 'The best Italian restaurant in town.', rating: 5 },
    { name: 'Michael Brown', text: 'Incredible service and delicious dishes.', rating: 5 },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Guests Say</h2>
      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
            <span>{'⭐'.repeat(review.rating)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;