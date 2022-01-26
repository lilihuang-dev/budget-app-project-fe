import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import "./Transactions.css";


function Transactions () {
    const [transactions, setTransactions] = useState([]);
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${URL}/transactions`)
        .then(res => {
            setTransactions(res.data);
        }).catch(err => {throw err});
    },[])

    
    const handleTotal =(transactions)=> {
        let sum = 0;
        for(let transaction of transactions) {
            sum += Number(transaction.amount);
        }
        return sum;
        
    }
    const totalAmount = handleTotal(transactions);

    return (
        <section className="Transactions">
            <h1 style={totalAmount >1000 ? {color: "green"} : totalAmount >0 ? {color: "orange"} : {color: "red"} }>Bank Account Total: {totalAmount}</h1>
                <thead>
                    <tr>
                        <th>Date</th>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Name</th>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction,index) => {
                        return <Transaction key={index} transaction={transaction} index={index} />
                    })}
                </tbody>  
        </section>
        
    )
}

export default Transactions;