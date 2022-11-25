import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

interface MessageProps {
  position: 'left' | 'right';
}

export const MessageWrapper = styled.div<MessageProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row' : 'row-reverse'};
  padding: 0.5em 0;
`;

export const MessageInfo = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  ${({ position }) =>
    position === 'left'
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: flex-end;
        `}
`;

export const Name = styled.span<MessageProps>`
  display: inline-block;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.75);
`;

export const Message = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 500;
`;

export const ChatAvatar = styled(Avatar)`
  position: absolute;
`;
