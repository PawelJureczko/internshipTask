import React, { Component } from "react";
import "./App.css";
import { CompanyList } from "./components/companylist/companylist.component";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companies: [],
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
		return <CompanyList companies={this.state.companies} />;
	}
}

export default App;
