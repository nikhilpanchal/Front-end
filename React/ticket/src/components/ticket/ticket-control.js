import React from 'react';

// ES6 Object destructuring at play here.
// We are only interested in the value of ticket.expansionState and would like to refer to that as "expanded"
// So we use {ticket: {expansionState: expanded}}. This tells us what property we want to pull out of ticket
// and what we want that property's alias within this function to be (in this case it's "expanded")
// We want to refer to the toggleExpansionState function as toggleState. So we say toggleExpansionState: toggleState
const TicketControl = ({ticket: {expansionState: expanded}, indexNum: index, toggleExpansionState: toggleState}) => {
    return (
        <div className="ticketControl">
            <div onClick={toggleState}>
                {expanded ? (<label>\/</label>) : (<label>></label>)}
            </div>
            <span>{index}</span>
        </div>
    )
}

export default TicketControl