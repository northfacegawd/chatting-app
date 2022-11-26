import ChevronLeft from '@components/common/icons/chevron-left';
import styled from '@emotion/styled';

export const ChatContentsWrapper = styled.section`
  position: relative;
  width: 100%;
`;

export const ChatsBox = styled.div`
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

export const ChatRoomInfo = styled.div`
  padding: 1rem;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray-100);
  font-weight: 600;
  @media (max-width: 735px) {
    height: 60px;
  }
`;

export const BackButton = styled(ChevronLeft)`
  cursor: pointer;
  display: none;
  height: 25px;
  margin-right: 1em;
  transition: color 200ms ease-out;
  &:hover {
    color: var(--primary);
  }
  @media (max-width: 735px) {
    display: flex;
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
    color: var(--primary);
  }
`;
