import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, BackpackWalletAdapter } from "@solana/wallet-adapter-wallets";
import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

function SendSolButton() {
  const { publicKey, sendTransaction } = useWallet();
  const connection = new Connection("https://api.devnet.solana.com");

  const sendSol = async () => {
    if (!publicKey) {
      alert("Connect your wallet first!");
      return;
    }

    try {
      const toAddress = new PublicKey("YOUR_DEVNET_WALLET_ADDRESS"); // Replace this!
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: toAddress,
          lamports: 0.0001 * 1e9, // 0.0001 SOL
        })
      );

      const sig = await sendTransaction(tx, connection);
      alert(`✅ Transaction sent! Signature: ${sig}`);
    } catch (e) {
      console.error(e);
      alert("❌ Failed to send SOL. Check console for details.");
    }
  };

  return (
    <button
      onClick={sendSol}
      style={{
        padding: "10px 20px",
        marginTop: "20px",
        background: "#6366f1",
        color: "white",
        borderRadius: "8px",
        border: "none",
      }}
    >
      Send 0.0001 SOL
    </button>
  );
}

function App() {
  const network = "https://api.devnet.solana.com";

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new BackpackWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              fontFamily: "sans-serif",
            }}
          >
            <h1>🚀 Solana MVP</h1>
            <WalletMultiButton />
            <SendSolButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
