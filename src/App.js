import React, { Component } from "react";

import "./App.css";
import { CardList } from "./component/caard-list/card-list.component";
import {Searchbox} from "./component/serchbox-componnt/seach-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: "",
    };

   // this.handelchange=this.handelchange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handelchange = (e) =>(
    this.setState({ searchfield: e.target.value })

  )

  render() {
    const { monsters, searchfield } = this.state;
    //const monsters = this.state.monsters;
    // const se = this.state.searchfield;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    /// console.log(filteredMonsters,se);

    return (

      <div className="App">

      <h1>Monster Rolodex</h1>
        <Searchbox
        
        placeholder="input monster"
        handelchange = {this.handelchange}
        
        />

    

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
//this.state.monsters
//
