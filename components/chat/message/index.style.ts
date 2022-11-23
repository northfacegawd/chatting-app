import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface MessageProps {
  position: 'left' | 'right';
}

export const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row' : 'row-reverse'};
  padding: 0.5em 0;
`;

export const MessageInfo = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;
  ${({ position }) =>
    position === 'left'
      ? css`
          margin: 0 0 0 0.8em;
          align-items: flex-start;
        `
      : css`
          margin: 0 0.8em 0 0;
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
