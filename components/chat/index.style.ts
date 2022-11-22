import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

export const ChatItemWrapper = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
  border-bottom: 1px solid var(--gray-100);
  padding: 0.5em 1em;
  cursor: pointer;
  transition: background-color 200ms ease-out;
  &:hover {
    background-color: var(--gray-100);
  }
`;

export const BorderAvatar = styled(Avatar)`
  border: 2px solid purple;
`;

export const MessageInfo = styled.p`
  margin-left: 0.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: fit-content;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
`;

export const Time = styled.time`
  font-size: 0.8rem;
  margin-left: 0.5em;
  color: rgba(0, 0, 0, 0.5);
`;
