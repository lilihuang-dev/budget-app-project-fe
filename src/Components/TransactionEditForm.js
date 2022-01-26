import {useState, useEffect} from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

function TransactionEditForm () {
    let { index } = useParams();
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL;
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
        category: ""
    });
    
    useEffect(() => {
        axios.get(`${url}/transactions/${index}`)
            .then(res => setTransaction(res.data))
            .catch(err => navigate("/not-found"));
    },[index])

    const handleTextChange =(event)=> {
        setTransaction({...transaction,[event.target.id]:event.target.value})
    }

    const handleSubmit =(event)=> {
        event.preventDefault();
        console.log("Hello")
        axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
        .then(res => navigate("/transactions"))
        .catch(err => console.log(err));
    }

    return (
        <div className="edit-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input id="date" type="text" value={transaction.date} onChange={handleTextChange} required/>
                <br />
                <br />
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={transaction.name} onChange={handleTextChange} required/>
                <br />
                <br />
                <label htmlFor="amount">Amount:</label>
                <input id="amount" type="number" value={transaction.amount} onChange={handleTextChange} required/>
                <br />
                <br />
                <label htmlFor="from">From:</label>
                <input id="from" type="text" value={transaction.from} onChange={handleTextChange} required/>
                <br />
                <br />
                <label htmlFor="category">Category:</label>
                <input id="category" type="text" value={transaction.category} onChange={handleTextChange} required/>
                <br />
                <br />
                <br />
                <input type="submit" />
            </form>
            <br />
            <br />
            <Link to={`/transactions/${index}`}>
                <button>No Change</button>
            </Link>
        </div>
    )
}

export default TransactionEditForm;