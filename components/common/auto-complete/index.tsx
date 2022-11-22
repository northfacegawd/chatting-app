import React from 'react';

import TextField from '@mui/material/TextField';

import { CustomAutoComplete } from './index.style';

export default function Search() {
  return (
    <CustomAutoComplete
      disablePortal
      id="combo-box-demo"
      options={[]}
      renderInput={(params) => <TextField {...params} label="대화찾기" />}
    />
  );
}
