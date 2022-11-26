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

export const EmptyChatContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
  p {
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    color: #4e61ff;
  }
`;
