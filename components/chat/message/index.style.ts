import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

export const MessageWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0.5em 0;
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  align-items: flex-start;
`;

export const Name = styled.span`
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
