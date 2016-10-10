import React from 'react';
import './typeahead.less';



const Row = ({ticker, name, index, handleClick}) => {
	return <div className="row" onClick={(e) => {
		handleClick(e, index);
	}}>{ticker}: {name}</div>
};

const Results = ({results, handleRowClick}) => {
	return (
		<div className="results">
			{
				results.map((company, i) => {
					return <Row index={i} 
								key={i} 
								ticker={company.ticker} 
								name={company.name} 
								handleClick={handleRowClick}/>
				})
			}
		</div>
	)
}

class TypeAhead extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			results: [],
			value: "Default Value"
		};

		this.input = undefined;

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleRowClick = this.handleRowClick.bind(this);
	}

	handleBlur(e) {
		
	}

	handleChange(e) {
		this.setState({
			results: [{
				ticker: "IBM",
				name: "Internatinal Business Machines"
			},{
				ticker: "IBN",
				name: "ICICI Bank"
			},{
				ticker: "INTC",
				name: "Intel Corporation"
			},{
				ticker: "IB",
				name: "IBC Advanced Allows"
			},{
				ticker: "ICPT",
				name: "Intercept Pharma"
			}],
			value: e.target.value
		});
	}

	handleRowClick(e, index) {
		let selected = this.state.results[index];

		this.setState({
			value: selected.name,
			selected: selected,
			results: []
		});

		this.input.focus();
	}


	
	render() {
		return (
			<div className="type-ahead-container">
				<input type="text"
						onChange={this.handleChange}
						onBlur={this.handleBlur}
						value={this.state.value} 
						ref={(e) => this.input = e}/>
				<Results results={this.state.results} 
						handleRowClick={this.handleRowClick} />
			</div>
		);
	}
}

export default TypeAhead