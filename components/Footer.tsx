import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 3rem;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <p data-testid="copyright">© 2019</p>
    </Wrapper>
  )
}

export default Footer;
