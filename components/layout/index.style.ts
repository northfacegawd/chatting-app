import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  height: calc(100vh - 64px);
  @media (max-width: 599px) {
    height: calc(100vh - 56px);
  }
`;
