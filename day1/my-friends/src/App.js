// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Database</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search"}
        className={"monster-searchField"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("constructor");
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="title">Monster Database</h1>
// <SearchBox
//   onChangeHandler={onSearchChange}
//   placeholder={"Search"}
//   className={"monster-searchField"}
// />
// <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
