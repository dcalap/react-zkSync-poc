import React from 'react';
import { useAsync } from "react-async"
import logo from './logo.svg';
import './App.css';
import {CheckoutManager} from 'zksync-checkout'

export const SemanticTypes = {
  Transaction: 'Transaction',
  FeeOrCommission: 'FeeOrCommission',
} as const;

 function App() {

  const manager = new CheckoutManager('rinkeby');

  const signedTransferTx = {
    from: "0xCE8a3215C76a645331eb58ce54E12DB6cD0cA73E",
    to: "0xEDC3FB8eC1Bb8b10c956a67Ab783207cB6FD1c38",
    token: "USDT",
    amount: "100000",
    semanticType: SemanticTypes.FeeOrCommission
  };

  const transactions = [signedTransferTx];
  const hashes = await manager.zkSyncBatchCheckout(transactions,"USDT");
  const receipts = await manager.wait(hashes, 'COMMIT');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload skghfdkjgf.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
