import React,{useEffect} from 'react'
import Transaction from "./Transaction";
import { useSelector } from 'react-redux';
import {all_transactions} from "./actions";
import {useDispatch} from 'react-redux';



const TransactionsList = () => {
    
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(all_transactions());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    var state =useSelector(state => state.transactions);
    
    console.log("state received in transaction list is:",state);
    return (
        <div className="transactions_list">
            <ul>
                {
                    state.map(transaction => (
                        <Transaction key={transaction._id} transaction = {transaction}/>
                        ))
                }
            </ul>
        </div>
    )
}

export default TransactionsList;
