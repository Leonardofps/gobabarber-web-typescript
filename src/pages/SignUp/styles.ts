import styled from 'styled-components';

import { shade } from 'polished';
import signUnBackgroundImg from '../../assets/signup-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;

  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: color 0.2s;
    color: #f4ede8;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUnBackgroundImg}) no-repeat center;
  background-size: cover;
`;
