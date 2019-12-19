import React from 'react';
import {StyledContainer, StyledContent} from './layout.styled';

import Footer from './Footer'
import Header from './Header'

import GlobalStyle from './theme';


export interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <StyledContainer>
      <GlobalStyle/>
      <StyledContent>
        <Header/>
        {children}
      </StyledContent>
      <Footer/>
    </StyledContainer>
  )
}

export default Layout;
