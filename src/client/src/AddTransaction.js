import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {add_transaction} from "./actions";

const AddTransaction = () => {
    const [text,setText] = useState("");
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const formSubmitHandler = (e) =>{
        e.preventDefault();
        var new_transaction = {
            text:text,
            value: +value
        }
        console.log("new transaction to be added:",new_transaction);
        dispatch(add_transaction(new_transaction));
        setText("");
        setValue('');
    }
    return (
        <div className="add_transaction">
            <form onSubmit={formSubmitHandler}>
                <label>Positive value for income / Negative for expenditure</label>
                <input type="text" value={text} required onChange={(e) => setText(e.target.value)} placeholder="Transaction title"/>
                <input type="number" value={value} required onChange={(e) => setValue(e.target.value)}  placeholder="Transaction value"/>    
                <button>Add Transaction</button>
            </form>              
        </div>
    )
}

export default AddTransaction
