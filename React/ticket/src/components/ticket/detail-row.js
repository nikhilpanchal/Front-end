import React from 'react';

import {SelectEvent} from 'ticket-components';

class TicketDetailRow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let ticket = this.props.ticket;

        return (
            <div className="ticket-row">
                <SelectEvent title="Held Status"
                        values={ticket.heldStatus.values}
                        selected={ticket.heldStatus.selectedValue} />

                <SelectEvent title="Tax Lots"
                        values={ticket.taxLots.values}
                        selected={ticket.taxLots.selectedValue} />

                <SelectEvent title="Client Position"
                        values={ticket.clientPosition.values}
                        selected={ticket.clientPosition.selectedValue} />
            </div>
        );
    }
}

export default TicketDetailRow