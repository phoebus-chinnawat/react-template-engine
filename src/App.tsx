import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => (
  <html>
    <head>
      <title>React Template Engine</title>
      <link href="/styles/tailwind.css" rel="stylesheet"/>
    </head>
    <body className="bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <Typography variant="h4" component="h1" className="text-center">
            Hello, {name}!
          </Typography>
          <Button variant="contained" color="primary" className="mt-4 w-full">
            Material-UI Button
          </Button>
        </div>
      </div>
    </body>
  </html>
);

export default App;
