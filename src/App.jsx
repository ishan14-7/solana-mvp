import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { WalletContext } from './WalletContext';

function App() {
  return (
    <WalletContext>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'sans-serif',
        }}
      >
        <h1>⚡ Solana MVP</h1>
        <WalletMultiButton />
      </div>
    </WalletContext>
  );
}

export default App;
