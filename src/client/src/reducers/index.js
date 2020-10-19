const initialState = {
    transactions:[ 
    //     {
    //     text:"flowers",
    //     value:123,
    //     _id:1234
    // },
    // {
    //     text:"flowers",
    //     value:123,
    //     _id:1235
    // },
    // {
    //     text:"flowers",
    //     value:123,
    //     _id:1232
    // },
    // {
    //     text:"flowers",
    //     value:123,
    //     _id:1231
    // }
]
}
const reducer = (state = initialState, action) => {
    console.log("state in reducer is :",state);
    switch (action.type) {
        case 'ALL_TRANSACTIONS':
            console.log("retreived transactions in reducer are:", action.payload)
            return { ...state, transactions: action.payload }
        case 'DELETE_TRANSACTION':
            var response = action.payload;
            var transactions = state.transactions;
            if (response.success === true) {
                var _id = response.data._id;
                transactions = transactions.filter(transaction => transaction._id !== _id);
                state = { ...state, transactions };
                return state;
            }
            else {
                return state;
            }
        case 'ADD_TRANSACTION':
            var payload = action.payload;
            if (payload.success === true) {
                var transactions_new = [...state.transactions, payload.data];
                state = { ...state, transactions: transactions_new };
                return state;
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export default reducer;