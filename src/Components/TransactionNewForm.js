import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./TransactionNewForm.css"

function TransactionNewForm () {
    const url = process.env.REACT_APP_API_URL;
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
        category: ""
    })
    const navigate = useNavigate();

    const handleTextChange =(e)=> {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const handleSubmit =(event)=> {
        event.preventDefault();
        axios.post(`${url}/transactions`, transaction)
        .then(res => navigate("/transactions"))
        .catch(err => console.log(err))
    }

    return (
        <div className="new-form">
            <form onSubmit={handleSubmit}>
                <lable htmlFor="date">Date: </lable>
                <input type="text" id="date" value={transaction.date} onChange={handleTextChange} placeholder="Please provide the date of the new transaction" required />
                <br />
                <br />
                <lable htmlFor="name">Name: </lable>
                <input type="text" id="name" value={transaction.name} onChange={handleTextChange} placeholder="Please provide the name of the new transaction" required />
                <br />
                <br />
                <lable htmlFor="amount">Amount: </lable>
                <input type="number" id="amount" value={transaction.amount} onChange={handleTextChange} placeholder="Please provide the amount of the new transaction" required />
                <br />
                <br />
                <lable htmlFor="from">From: </lable>
                <input type="text" id="from" value={transaction.from} onChange={handleTextChange} placeholder="It's from..." required />
                <br />
                <br />
                <label htmlFor="category">Category: </label>
                <input id="category" type="text" value={transaction.category} onChange={handleTextChange} placeholder="Please provide the category of the new transaction"required/>
                <br />
                <br />
                <input id="submitNew" type="submit" />
            </form>
        </div>
    )
}

export default TransactionNewForm;