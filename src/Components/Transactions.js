import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import "./Transactions.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";


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
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        
                        <th>Name</th>
                        
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction,index) => {
                        return <Transaction key={index} transaction={transaction} index={index} />
                    })}
                </tbody>
                </Table>  
        </section>
        
    )
}

export default Transactions;