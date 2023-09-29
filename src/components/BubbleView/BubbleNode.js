// BubbleNode.js
import React from 'react';
import './BubbleNode.css';

const BubbleNode = ({ company }) => {
  return (
    <div className="bubble-node">
      <div className="company-name">{company.name}</div>
      {/* Additional company information can be displayed here */}
    </div>
  );
};

export default BubbleNode;
