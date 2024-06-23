// Editor.tsx
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RenderData } from '../../types';

interface EditorProps {
  data: RenderData;
  onChange: (data: RenderData) => void;
  onPublish: (data: RenderData) => void;
}

const Editor: React.FC<EditorProps> = ({ data, onChange, onPublish }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: data,
  });

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Controller
          name="shopName"
          control={control}
          render={({ field }) => <TextField fullWidth label="Shop Name" {...field} />}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <TextField fullWidth label="Description" {...field} />}
        />
        <Controller
          name="contacts.email"
          control={control}
          render={({ field }) => <TextField fullWidth label="Email" {...field} />}
        />
        <Controller
          name="contacts.phone"
          control={control}
          render={({ field }) => <TextField fullWidth label="Phone" {...field} />}
        />
        <Button variant="contained" color="primary" type="submit">
          Update
        </Button>
        <Button variant="contained" color="secondary" type="button" onClick={() => onPublish(data)}>
          Publish
        </Button>
      </Box>
    </form>
  );
};

export default Editor;
