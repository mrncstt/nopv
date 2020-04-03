import React from 'react';
import PropTypes from 'prop-types';

import { Container, LoadingStyles, Message } from './styles';

export default function Loading({ message }) {
  return (
    <Container>
      <LoadingStyles />
      <Message>{message}</Message>
    </Container>
  );
}

Loading.defaultProps = {
  message: 'Carregando ...',
};

Loading.propTypes = {
  message: PropTypes.string,
};
