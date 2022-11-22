import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ChatSectionWrapper = styled.section`
  border-right: 1px solid var(--gray-100);
  width: 350px;
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
  height: 60px;
  border-top: 1px solid var(--gray-100);
  border-radius: 0;
`;
