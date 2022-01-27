import React from 'react';

import './Contact.css';

const MessageStatusModal = ({ isModalOn, setIsModalOn }) => {
  return (
    <div className={`message-status-modal-ctr ${isModalOn ? 'active' : ''}`}>
      <h4>Message sent!</h4>
      <p>Thank you! I will reply to you as soon as possible!</p>
      <button className onClick={() => setIsModalOn(false)}>
        Close
      </button>
    </div>
  );
};

export default MessageStatusModal;
