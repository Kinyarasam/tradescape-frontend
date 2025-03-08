import React from 'react';
import Button from '@mui/material/Button';

const CustomButton: React.FC = () => {
  return (
    <Button variant="contained" className="bg-blue-500 hover:bg-blue-700">
      Connect Wallet
    </Button>
  );
};

export default CustomButton;