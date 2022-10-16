import { ButtonStyled, ButtonCont } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <ButtonCont>
      <ButtonStyled
        type="button"
        onClick={() => {
          loadMore();
        }}
      >
        Load more
      </ButtonStyled>
    </ButtonCont>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
