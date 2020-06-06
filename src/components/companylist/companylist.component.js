import React, { Component } from "react";
import { Company } from "../company/company.component";

export class CompanyList extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			tempResult: 10,
			newArray: [],
			loading: true,
		};
	}

	componentDidMount (){
			console.log(this.props);	
	}
		// const filledArray = this.props.companies.map((item) => {
		// 	console.log("2")
		// 	fetch(`https://recruitment.hal.skygate.io/incomes/${item.id}`)
		// 		.then((response) => response.json())
		// 		.then((data) => {
		// 			let transactionsToFloat = data.incomes.map((item) =>
		// 				parseFloat(item.value)
		// 			);
		// 			let result = transactionsToFloat.reduce((acc, num) => {
		// 				return acc + num;
		// 			}, 0);
		// 			result = Math.round(result * 100) / 100;
		// 			this.setState({ tempResult: result, loading: false });
		// 			console.log(item.id, item.name, item.city, result);
		// 			return {
		// 				id: item.id,
		// 				name: item.name,
		// 				city: item.city,
		// 				totalIncome: result,
		// 			};
		// 		});
		// 	this.setState({ loading: false });
		// 	return true;
			
		// });
		// this.setState({ newArray: filledArray });
	// };

	render() {
		if (this.state.loading) {
			return <h1>Loading...</h1>;
		} 
		if (!this.state.loading) {
			return (
				<div>
					{/* <button onClick={this.handleClick}>Button</button> */}
					<table>
						<thead>
							<tr>
								<th> Id </th>
								<th> Name </th>
								<th> City </th>
								<th> Total income </th>
							</tr>
						</thead>

						{this.state.newArray.map((item) => (
							<Company key={item.id} company={item} />
						))}
					</table>
				</div>
			);
		}
	}
}
