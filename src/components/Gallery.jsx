import React from 'react';
import interior1 from '../assets/restaurant-interior-1.jpg';
import interior2 from '../assets/restaurant-interior-2.jpg';
import interior3 from '../assets/restaurant-interior-3.jpg';
import exterior from '../assets/restaurant-exterior.jpg';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import './Gallery.css';

const images = [interior1, interior2, interior3, exterior, gallery1, gallery2];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;