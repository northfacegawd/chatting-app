import React, { useState } from 'react';

import useUserList from '@hooks/requests/get/useUserList';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

interface SearchUserProps {
  onSelect: (email: string) => void;
}

export default function SearchUser({ onSelect }: SearchUserProps) {
  const [email, setEmail] = useState<string>('');
  const { data, isLoading } = useUserList(email);

  const onResetEamail = () => setEmail('');

  return (
    <Autocomplete
      loading={isLoading}
      onOpen={onResetEamail}
      onClose={onResetEamail}
      options={(data ?? []).map((user) => user.email)}
      onInputChange={(_, value) => onSelect(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
