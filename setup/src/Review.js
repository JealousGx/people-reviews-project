import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0;
    } else if (num < 0) {
      return people.length - 1;
    }
    else {
      return num;
    }
  }

  const prevPerson = () => setIndex((index) => checkNum(index - 1));
  const nextPerson = () => setIndex((index) => checkNum(index + 1));

  
  let randomIndex = () => setIndex(Math.round(Math.random() * (people.length - 1)));

  let randomNum = Math.round(Math.random());
  // if the randomIndex is equal to our current index, 
  // Then just add or subtract two (2) from that index
  // depending on the randomNum function
  if (randomIndex === index) {
    randomIndex = randomNum ? (randomIndex + 2) : (randomIndex - 2);
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
      <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
    </div>
    <button className='random-btn' onClick={randomIndex}>surprise me</button>
  </article>;
};

export default Review;
