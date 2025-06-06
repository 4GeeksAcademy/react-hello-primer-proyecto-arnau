import React from 'react';

export default function Card({ title, text, imageUrl, buttonLabel }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  );
}
