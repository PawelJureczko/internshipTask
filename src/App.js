import React, {Component} from 'react';
import './App.css';
import { CompanyList } from './components/companylist/companylist.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      companies: [],
    }
  }
  componentDidMount = () => {
    fetch('https://recruitment.hal.skygate.io/companies')
      .then(response => response.json())
      .then(data => this.setState({companies: data}));
  }



  render(){
    return (
     <div>
       <CompanyList
          companies={this.state.companies}
        />
     </div>
    )
  }
}

export default App;
