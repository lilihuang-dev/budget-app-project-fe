import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TransactionsDetails.css";

function TransactionsDetails () {
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
    let URL = process.env.REACT_APP_API_URL;

    useEffect (() => {
        fetch(`${URL}/transactions/${index}`)
            .then(res => res.json())
            .then(data => setTransaction(data))
            .catch(()=> navigate("/not found"))
    },[index])

    const handleDelete = () => {
        axios.delete(`${URL}/transactions/${index}`)
            .then(res => navigate("/transactions"))
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="TransactionsDetails">
            {/* <tr> */}
                <h3>Date: {transaction.date}</h3>
                <h3>Name: {transaction.name}</h3>
                <h3>Amount: {transaction.amount}</h3>
                <h3>From: {transaction.from}</h3>
                <h3>Category: {transaction.category}</h3>
            {/* </tr> */}
            <br />
            <div className="showNavigation">
                <Link to="/transactions">
                    <button>Back</button>
                </Link>
                <br />
                <Link to={`/transactions/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <br />
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TransactionsDetails;