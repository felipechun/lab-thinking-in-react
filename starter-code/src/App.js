import React, { Component } from 'react';
import data from './data.json'
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";


export class App extends Component {
  state = {
    data: data.data,
    search: '',
    filteredList: data.data,
  }

  searchHandler = (event) => {
    const {value} = event.target
    const updatedList = [...this.state.data].filter(element => element.name.toLowerCase().includes(value.toLowerCase()))

    this.setState({
      filteredList: updatedList,
      search: value
    })
  }

  render() {
    return (
      <div>
        <h1>Ironstore</h1>
        <SearchBar searchWord={this.searchHandler}/>
        <ProductTable products={this.state.filteredList}/>
      </div>
    )
  }
}

export default App;
