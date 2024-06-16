// src/App.tsx
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface AppProps {
  name: string;
}

export const App: React.FC<AppProps> = ({ name }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <Typography variant="h4" component="h1" className="text-center">
          Hello, {name}!
        </Typography>
        <Button variant="contained" color="primary" className="mt-4 w-full" onClick={() => { alert('clicked!') }}>
          Material-UI Button
        </Button>
      </div>
    </div>
  );
};
