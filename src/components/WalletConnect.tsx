import React, { useState } from 'react';
import { connectWallet } from '../api/web3';

const WalletConnect: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>('');

  const handleConnect = async () => {
    // if (window.ethereum) {
    //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //   const address = accounts[0];
    //   setWalletAddress(address);
    //   await connectWallet(address); // Call backend to handle web3 logic
    // } else {
    //   alert('Please install MetaMask!');
    // }
  };

  return (
    <div>
      <button onClick={handleConnect}>Connect Wallet</button>
      {walletAddress && <p>Connected: {walletAddress}</p>}
    </div>
  );
};

export default WalletConnect;