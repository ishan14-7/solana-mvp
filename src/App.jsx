import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useState } from 'react';

function App() {
  const { publicKey, sendTransaction } = useWallet();
  const [txSig, setTxSig] = useState(null);

  const sendSol = async () => {
    if (!publicKey) return alert('Connect wallet first!');
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const recipient = new PublicKey('5LYbWXhBg7iW3a1hESG5QY6Ph1qKDSNurRf2NeYfbK13'); // test address

    const tx = await connection.requestAirdrop(recipient, 0.0001 * LAMPORTS_PER_SOL);
    setTxSig(tx);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-3xl font-bold mb-4">Solana MVP</h1>
      <WalletMultiButton />
      {publicKey && (
        <div className="mt-4">
          <button
            onClick={sendSol}
            className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500"
          >
            Send 0.0001 SOL
          </button>
          {txSig && (
            <p className="mt-2 text-sm break-all">
              Tx Signature: {txSig}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
