import styled from '@emotion/styled';

export const WriteForm = styled.form`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  border: 1px solid var(--gray-100);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const MessageArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 1em;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--gray-100);
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5em;
  background-color: var(--gray-50);
`;
