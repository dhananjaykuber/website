import React from 'react';
import styles from '../styles/components/Question.module.css';

const Question = ({ question }) => {
  return (
    <div className={styles.question}>
      <img src={question.image} alt="user" />
      <p>{question.text}</p>
    </div>
  );
};

export default Question;
