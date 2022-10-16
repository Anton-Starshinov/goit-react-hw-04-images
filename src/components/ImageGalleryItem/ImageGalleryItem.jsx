import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevModal => !isModalOpen);
  };

  return (
    <ImageGalItem>
      <ImageGalleryItemImage
        src={webformatURL}
        alt="img"
        onClick={toggleModal}
      />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt="img" />
        </Modal>
      )}
    </ImageGalItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
