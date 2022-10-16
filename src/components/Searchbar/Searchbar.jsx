import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState('');

  const handleChange = evt => {
    setRequest(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (request.trim() === '') {
      alert('Введите название картинки!');
      return;
    }
    onSubmit({ request });
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonSpan>Search</SearchFormButtonSpan>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={request}
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarStyled>
  );
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
