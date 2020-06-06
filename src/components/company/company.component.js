import React, { Component } from "react";

export class Company extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			city: "",
			totalIncome: "",
		};
	}

	componentDidMount = () => {
		fetch(`https://recruitment.hal.skygate.io/incomes/${this.props.company.id}`)
			.then((response) => response.json())
			.then((data) => {
				let transactionsToFloat = data.incomes.map((item) =>
					parseFloat(item.value)
				);
				let result = transactionsToFloat.reduce((acc, num) => {
					return acc + num;
				}, 0);
				result = Math.round(result * 100) / 100;
				this.setState({
					id: this.props.company.id,
					name: this.props.company.name,
					city: this.props.company.city,
					totalIncome: result,
				});
			})
			.catch((error) => {
				console.error("Error");
			});
	};

	render() {
		return (
			<tbody>
				<tr>
					<td> {this.state.id}</td>
					<td> {this.state.name}</td>
					<td> {this.state.city}</td>
					<td> {this.props.company.totalIncome} </td>
				</tr>
			</tbody>
		);
	}
}
