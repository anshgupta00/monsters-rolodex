import { Component } from "react";

// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

// class Component

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

//funtional component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={event => {
            console.log(event.target.value);

            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {this.state.monsters.map(monster => {
          return <h1>{monster.name}</h1>;
        })}
        <CardList monsters={"I'm a monster."} />
        npm
      </div>
    );
  }
}

export default App;
