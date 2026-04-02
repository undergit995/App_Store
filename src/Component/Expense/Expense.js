import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaBeer } from "react-icons/fa";

export default function Expense() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(1);
  const [transaction, setTransaction] = useState([]);

  // setBalance(prev=>income-expenses)
  function formSubmit(e) {
    e.preventDefault();
   
    const transaction = {
      id: uuidv4(),
      title: title,
      amount: amount,
      type: type,
    };
    setTransaction((prev) => [...prev, transaction]);
     type == 1
      ? <div>{setIncome((prev) => prev + Number(amount))},{setBalance(pre=>pre+Number(amount))}</div>
      :<div> {setExpenses((prev) => prev + Number(amount))},{setBalance(pre=>pre-Number(amount))}</div>;

    
    setTitle("");
    setAmount(0);
    setType(1);
    console.log("bal", balance, income - expenses);
  }
   

  function onDelete(params) {
    setTransaction((prev) => prev.filter((e) => e.id!= params));
  }
 /*  function name(params) {
    params==="income"?
    setBalance(income - expenses)
    return balance
  } */

  return (
    <div className="p-8 h-screen w-full">
      <div className="max-w-lg h-700 mx-auto shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <div className="rounded p-4">
          <h2>Hi, Richard</h2>
          <p>
            Welcome back to your{" "}
            <span className="text-blue-900">Money Manager</span>
          </p>
        </div>
        <div className="flex gap-4 max-w-md mx-auto">
          <div className="flex rounded p-3 bg-green-300">
            <div className="mr-1 mt-2"><FaBeer /></div>
            <div><p>Your Balance</p> <p>Rs {balance}</p>{" "}</div>
          </div>
          <div className="flex rounded p-3 bg-green-300">
            <div className="mr-1 mt-2"><FaBeer /></div>
            <div><p>Your Income</p> <p>Rs {income}</p>{" "}</div>
          </div>
          <div className="flex rounded p-3 bg-green-300">
            <div className="mr-1 mt-2"><FaBeer /></div>
            <div><p>Your Expenses</p> <p>Rs {expenses}</p>{" "}</div>
          </div>
        </div>
        <div className="flex">
          <form className="h-200 w-170 rounded p-4" onSubmit={formSubmit}>
            <h3 className="font-bold">Add Transaction</h3>
            <label htmlFor="title">TITLE</label>
            <br></br>
            <input
              id="title"
              type="text"
              className="border"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            ></input>
            <br></br>
            <label htmlFor="amount">AMOUNT</label>
            <br></br>
            <input
              type="number"
              id="amount"
              className="border"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            ></input>
            <br />
            <label htmlFor="type">TYPE</label>
            <br></br>
            <select
              id="type"
              value={type}
              onChange={(e) => (setType(e.target.value), console.log(type))}
            >
              {/* {[{id:1,val:"Income"},{id:2,val:"Expense"}].map(e=><option key={e.id} value={e.val}>{e.val}</option>)} */}
              <option value={1}>Income</option>
              <option value={2}>Expenses</option>
            </select>
            <br />
            <button className="rounded bg-blue-700 w-14">Add</button>
          </form>
          <div className="rounded">
            <h4 className="font-bold">History</h4>
            <table>
              <thead>
                <tr>
                  <th className="mr-3">Title</th>
                  <th className="mr-3">Amount</th>
                  <th className="mr-3">Type</th>
                </tr>
              </thead>
              <tbody>
                {transaction.map((e, index) => (
                  <tr key={index}>
                    <td >{e.title}</td>
                    <td >{e.amount}</td>
                    <td >{e.type == 1 ? "Income" : "Expenses"}</td>
                    <td onClick={() => onDelete(e.id)}>del</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
