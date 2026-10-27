# Solana MVP

A small React app for trying out Solana wallets. Connect a Phantom wallet and fire off a test transaction on Solana devnet, then see its signature.

**Live:** [solana-mvp.vercel.app](https://solana-mvp.vercel.app)

## What it does

- Connects a Phantom wallet with the Solana wallet adapter, and reconnects automatically on reload.
- Runs on **devnet**, so no real SOL is involved.
- The button requests a 0.0001 SOL devnet airdrop to a test address and shows the transaction signature.

## Stack

React 19, Vite, Tailwind CSS 4, `@solana/web3.js` and `@solana/wallet-adapter`.

## Running locally

```bash
npm install
npm run dev     # http://localhost:5173
```

You need the [Phantom](https://phantom.app) browser extension set to devnet.

## Code tour

- `src/WalletContext.jsx` sets up the devnet connection and the Phantom adapter.
- `src/App.jsx` has the connect button and the transaction logic.
