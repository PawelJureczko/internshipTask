import React, { Component } from "react";

export class Company extends Component {
	constructor() {
		super();
		this.state = {
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
				this.setState({ totalIncome: result });
			})
			.catch((error) => {
				console.error("Error", error);
			});
	};

	render() {
		return (
			<table>
				<tbody>
					<tr>
						<td> {this.props.company.id}</td>
						<td> {this.props.company.name}</td>
						<td> {this.props.company.city}</td>
						<td> {this.state.totalIncome} </td>
					</tr>
				</tbody>
			</table>
		);
	}
}
