import React, { useState } from 'react';
import './RatingStarsAndComment.css'
const StarRating = ({ rating, onRatingChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      <label>Rating:</label>
      <div>
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => onRatingChange(star)}
            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray', fontSize: '1.5em' }}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

const RatingStarsAndComment = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    // For now, just set the submitted state to true
    setSubmitted(true);
  };

  return (
    <div id='text' style={{ fontSize: '1.2em', maxWidth: '600px', margin: 'auto' }}>
<h1 style={{ fontSize: '1.5em', color: 'white' }}>Rating Stars and Comment</h1>
      {submitted ? (
        <p style={{ fontSize: '1.2em',color:'white' }}>Form submitted! Thank you for your feedback.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
          <div>
            <label style={{ fontSize: '1.2em',color:'white' }}>Comment:</label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              style={{ fontSize: '1em', width: '100%', minHeight: '100px' }}
            />
          </div>
          <div>
            <button className='bg-blue-500 rounded-[20px] text-[20px] m-[10px] w-[90px] hover:bg-blue-700 cursor-pointer' type="submit" disabled={submitted} style={{ fontSize: '1em',colorAdjust:'white' }}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RatingStarsAndComment;
