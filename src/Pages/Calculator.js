import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionCalculator from './components/TransactionCalculator';

function Calculator() {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3>Calculator</h3>
        </div>
        <div className="card-body">
          <TransactionCalculator/>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
