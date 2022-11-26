import React from 'react';

import { ModalContents, ModalWrapper } from './index.style';

interface CreateChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateChatModal({
  open,
  onClose,
}: CreateChatModalProps) {
  return (
    <ModalWrapper open={open} onClose={onClose} style={{ padding: '' }}>
      <ModalContents>
        <h1>hi</h1>
      </ModalContents>
    </ModalWrapper>
  );
}
