import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { AppDiv } from './App.styled';

export const App = () => {
  const [request, setRequest] = useState('');

  const formSubmitHandler = ({ request }) => {
    setRequest(request);
  };

  return (
    <AppDiv>
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery request={request} />
    </AppDiv>
  );
};
