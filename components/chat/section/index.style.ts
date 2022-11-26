import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ChatSectionWrapper = styled.section`
  border-right: 1px solid var(--gray-100);
  min-width: 350px;
  position: relative;
  @media (max-width: 735px) {
    min-width: unset;
    width: 100%;
  }
`;

export const ChatSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid var(--gray-100);
`;

export const ChatCount = styled.span`
  font-size: 0.9rem;
  color: var(--gray-500);
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: fit-content;
  border-bottom: 1px solid var(--gray-100);
`;

export const MoreChattingButton = styled(Button)`
  width: 100%;
  background-color: white;
  height: 70px;
  border-top: 1px solid var(--gray-100);
  border-radius: 0;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const CreateChatButton = styled(Button)`
  border-radius: 25px;
`;
