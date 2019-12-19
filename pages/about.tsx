import styled from 'styled-components';

import Layout from '../components/Layout';

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    max-width: 450px;
  }

  img {
    padding: 0 5px;
    height: 150px;
  }
`;

const About: React.FC = () => (
  <Layout>
    <h1 data-testid="page-title">About</h1>
    <p data-testid="text">This boilerplate uses Nextjs, React v16.8 and Styled components</p>
    <ImageWrapper>
      <div>
        <img data-testid="img" src="/static/jslogo.png" alt="js"/>
        <img data-testid="img" src="/static/react.png" alt="js" />
        <img data-testid="img" src="/static/nextjs.png" alt="js"/>
        <img data-testid="img" src="/static/styled.png" alt="js"/>
      </div>
    </ImageWrapper>
  </Layout>
);

export default About;
