import { Link } from "react-router-dom";

function Transaction ({transaction, index}) {
    return (
        <tr className="Transaction">
            <td>{transaction.date}</td>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <td><Link to={`/transactions/${index}`}>{transaction.name}</Link></td>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <td>{transaction.amount}</td>
        </tr>
    )
}

export default Transaction;