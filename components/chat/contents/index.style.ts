import styled from '@emotion/styled';

export const ChatContentsWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 1rem;
  animation: fadein 300ms ease-out;

  @keyframes fadein {
    from {
      transform: translateY(20%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const EmptyChatContents = styled.div``;
