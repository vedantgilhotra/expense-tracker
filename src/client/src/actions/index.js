
export const delete_transaction = (_id) => {
    return dispatch => {
        fetch(`http://localhost:5000/:${_id}`).then(data => data.json()).then(response => {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: response
            })
        })
    }
};

export const add_transaction = (new_transaction) => {
    return dispatch => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                text:new_transaction.text,
                value:new_transaction.value
            })
        };
        fetch('http://localhost:5000/add_transaction', requestOptions).then(data => data.json()).then(response => {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: response
            })
        })   
    } 
};

export const  all_transactions = () => {
    return dispatch => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
       .then(data => {
        console.log("response from all_transactions is:", data);
        var payload = data.data;
        dispatch({
            type: 'ALL_TRANSACTIONS',
            payload: payload
        }) 
    });
    }
    
};