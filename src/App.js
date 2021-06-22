import React from 'react';
import './App.css';
import {CardList} from "./components/card-list-components/card-list.jsx"
import { Search } from './components/search-components/search';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            monster: [],
            searchField : ''
        } 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState( {monster: users} ))
    }


    render() {

        const { monster, searchField } = this.state;
        const Filtered = monster.filter(monsters =>  monsters.name.toLowerCase().includes(searchField.toLowerCase()) )

        return (

            <div className = "App">
                <h1> Monsters Robolox </h1>
                <Search placeholder = "Search Monsters" change = {items => this.setState( { searchField: items.target.value } )} />
                <CardList monsters = { Filtered } />
            </div>

        )
    }
}

export default App;
