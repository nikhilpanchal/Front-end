import React from 'react';
import { SelectEvent, TextEvent } from 'ticket-components';

class TicketTopRow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let ticket = this.props.ticket;
        
        return (
            <div className="ticket-row">
                <SelectEvent title="Action" 
                        changeBlur={this.props.changeAction}
                        values={ticket.action.values}
                        selected={ticket.action.selectedValue} />

                <TextEvent title="Quantity" 
                        changeBlur={this.props.changeQuantity}
                        value={ticket.quantity.value}
                        type="number" />
                
                {/* Need to convert this to a type-ahead */}
                <TextEvent title="Symbol"
                        changeBlur={this.props.changeSymbol}
                        value={ticket.symbol.value}
                        type="text" />

                <TextEvent title="Price"
                        changeBlur={this.props.changePrice}
                        value={ticket.price.value}
                        type="number" />

                <SelectEvent title="Price Type"
                        values={ticket.priceType.values}
                        selected={ticket.priceType.selectedValue} />

                {/* 
                <TextEvent title="Limit Price"
                        value={ticket.limitPrice.value}
                        type="number" />
                */}

                <SelectEvent title="Order Type"
                        values={ticket.orderType.values}
                        selected={ticket.orderType.selectedValue} />

                <SelectEvent title="Commission Type"
                        values={ticket.commissionType.values}
                        selected={ticket.commissionType.selectedValue} />

                <TextEvent title="Commission"
                        value={ticket.commission.value}
                        type="number" />
            </div>
        );
    }
}

TicketTopRow.propTypes = {
    ticket: React.PropTypes.object,
    changeAction: React.PropTypes.func,
    changeQuantity: React.PropTypes.func,
    changeSymbol: React.PropTypes.func,
    changePrice: React.PropTypes.func
}

export default TicketTopRow