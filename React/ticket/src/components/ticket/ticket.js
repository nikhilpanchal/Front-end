import React from 'react';

import TicketTopRow from './top-row.js';
import TicketDetailRow from './detail-row.js';
import TicketControl from './ticket-control.js';

class Ticket extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="ticket">
                <TicketControl {...this.props}/>
                <div className="ticketBody">
                    <TicketTopRow {...this.props} />
                    {this.props.ticket.expanded && 
                        <TicketDetailRow {...this.props} />
                    }
                </div>
            </div>
        );
    }
}

export default Ticket