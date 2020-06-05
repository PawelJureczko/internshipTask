import React, { Component } from "react";
import { Company } from "../company/company.component";

export class CompanyList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th> Id </th>
							<th> Name </th>
							<th> City </th>
							<th> Total income </th>
						</tr>
					</thead>

					{this.props.companies.map((item) => (
						<Company key={item.id} company={item} />
					))}
				</table>
			</div>
		);
	}
}
