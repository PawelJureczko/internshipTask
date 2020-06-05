import React, { Component } from "react";
import "./App.css";
import { CompanyList } from "./components/companylist/companylist.component";
import { Searchfield } from "./components/searchfield/searchfield.component";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companies: [],
			searchfield: "",
		};
	}

	componentDidMount = () => {
		const URL = "https://recruitment.hal.skygate.io/companies";
		fetch(URL)
			.then((response) => response.json())
			.then((data) => this.setState({ companies: data }))
			.catch((error) => {
				console.error("Error", error);
			});
	};

	render() {
		const filteredCompanies = this.state.companies.filter((item) =>
			item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		);
		return (
			<div>
				<Searchfield
					handleChange={(e) => this.setState({ searchfield: e.target.value })}
				/>
				<CompanyList companies={filteredCompanies} />
			</div>
		);
	}
}

export default App;
