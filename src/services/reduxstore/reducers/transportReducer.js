const TransportReducer=(state=[],action)=>{
    switch(action.type){
        case "RIDEREQUESTED":
            return state
        case 'DRIVERENROUTE':
            return state
        case 'READYFORPICKUP':
            return state
        case 'DROPOFF':
            return state
        case 'CANCELLED':
            return state
        default:
            return state    
    }
}

export default TransportReducer