import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionCalculator = () => {
  const [transactions, setTransactions] = useState([]);
  const [creditTotal, setCreditTotal] = useState(0);
  const [debitTotal, setDebitTotal] = useState(0);

  const addTransaction = (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const amount = parseInt(event.target.amount.value);
    const transaction = {
      type: type,
      amount: amount
    };
    setTransactions([...transactions, transaction]);
    event.target.reset();
  };

  const deleteTransaction = (index) => {
    const newTransactions = [...transactions];
    newTransactions.splice(index, 1);
    setTransactions(newTransactions);
  };

  const calculateTotal = () => {
    let creditTotal = 0;
    let debitTotal = 0;
    transactions.forEach(transaction => {
      if (transaction.type === 'credit') {
        creditTotal += transaction.amount;
      } else {
        debitTotal += transaction.amount;
      }
    });
    setCreditTotal(creditTotal);
    setDebitTotal(debitTotal);
  };

  return (
    <div>
      <form onSubmit={addTransaction}>
        <div>
          <label>Credit/Debit:</label>
          <select name="type">
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit/Debit</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{new Date().toLocaleDateString()}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td><button onClick={() => deleteTransaction(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Credit Total: {creditTotal}</p>
        <p>Debit Total: {debitTotal}</p>
      </div>
      <button onClick={calculateTotal}>Calculate Total</button>
    </div>
    
  );
};

export default TransactionCalculator;
