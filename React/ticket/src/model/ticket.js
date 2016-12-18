"use strict"


class Ticket {
	constructor() {
		this.expanded = false;

		this.action = {
			values: [
				"Buy",
				"Sell",
				"Sell Short"
			],
			selectedValue: "Buy"
		};

		this.quantity = {
			value: 0
		};

		this.symbol = {
			value: ""
		};

		this.priceType = {
			values: [
				"Market",
				"Market On Close",
				"Stop",
				"Limit",
				"Stop Limit"
			],
			selectedValue: "Market"
		};

		this.price = {
			value: 0
		};

		this.limitPrice = {
			value: 0
		};

		this.orderType = {
			values: [
				"Day",
				"GTC"
			],
			selectedValue: "Day"
		};

		this.commissionType = {
			values: [
				"Cents Per Share",
				"Discount",
				"Gross Amount",
				"Basis Point"
			],
			selectedValue: "Cents Per Share"
		};

		this.commission = {
			value: 0
		};

		this.heldStatus = {
			values: [
				"Held",
				"Not Held"
			],
			selectedValue: "Held"
		};

		this.taxLots = {
			values: [
				"FIFO",
				"LIFO",
				"Variable"
			],
			selectedValue: "FIFO"
		};

		this.clientPosition = {
			values: [
				"Long in Position",
				"Other position",
				"Selling short",
				"Some other account",
				"Making up position"
			],
			selectedValue: "Long in Position"
		}
	}
}

export default Ticket