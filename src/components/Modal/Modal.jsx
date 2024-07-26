import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
ReactModal.setAppElement('#root');

export function Modal({ onClose, image, isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="containerModal">
        <h2>Recipe</h2>
        <img src={image} alt="recipe" width="400px" />
        <button className="close" onClick={onClose}>
          close
        </button>
      </div>
    </ReactModal>
  );
}
