import React from 'react';

class AppDynamic extends React.Component {

	constructor() {
		super();

		this.state = {
			data: [
				{id: 1, name: "Nikhil Panchal"},
				{id: 2, name: "Nikhil Panchal"},
				{id: 3, name: "Nikhil Panchal"},
				{id: 4, name: "Nikhil Panchal"},
				{id: 5, name: "Nikhil Panchal"},
				{id: 6, name: "Nikhil Panchal"},
				{id: 7, name: "Nikhil Panchal"},
				{id: 8, name: "Nikhil Panchal"},
				{id: 9, name: "Nikhil Panchal"},
				{id: 10, name: "Nikhil Panchal"},
				{id: 11, name: "Nikhil Panchal"},
				{id: 12, name: "Nikhil Panchal"},
				{id: 13, name: "Nikhil Panchal"},
				{id: 14, name: "Nikhil Panchal"},
				{id: 15, name: "Nikhil Panchal"},
				{id: 16, name: "Nikhil Panchal"},
			]
		}
	}

	render() {
		// Person will have similar siblings, so we should create a property "key"
		// with a unique value for each sibling.
		let rows = this.state.data.map(function (person) {
			return <Person key={person.id} {...person} />
		});

		return (
			<table>
				<tbody>{rows}</tbody>
			</table>
		)
	}

};

const Person = (props) => (
	<tr>
		<td>{props.id}</td>
		<td>{props.name}</td>
	</tr>
)

export default AppDynamic;