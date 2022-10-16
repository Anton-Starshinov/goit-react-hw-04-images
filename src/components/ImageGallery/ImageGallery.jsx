import fetchImg from 'API';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

export default function ImageGallery({ request }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      if (request === '') {
        return;
      }
      setLoading(true);
      try {
        const imgApi = await fetchImg(request, page);
        setImages(image => [...image, ...imgApi]);
      } catch (error) {
        setError({ error });
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [request, page]);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [request]);

  return (
    <div>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ImageGalleryList>
      {error && <p>Whoops, something went wrong</p>}
      {images.length !== 0 && images.length >= 12 && images.length < 500 && (
        <Button
          loadMore={() => {
            setPage(prevPage => prevPage + 1);
          }}
        />
      )}
      {loading && <Loader />}
    </div>
  );
}

ImageGallery.propType = {
  request: PropTypes.string.isRequired,
};
