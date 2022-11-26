import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';

export const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const ModalContents = styled.div`
  padding: 1em;
  background-color: white;
  border-radius: 6px;
  width: 400px;
`;

export const ModalTitle = styled.h4`
  margin-bottom: 1em;
`;
