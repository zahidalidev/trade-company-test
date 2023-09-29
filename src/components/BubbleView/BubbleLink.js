// BubbleLink.js
import React from 'react';
import './BubbleLink.css';

const BubbleLink = ({ source, target, type }) => {
  return (
    <div className={`bubble-link ${type}`} data-source={source} data-target={target}></div>
  );
};

export default BubbleLink;
