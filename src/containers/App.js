import React, { Component } from 'react';
import CardHolder from '../components/CardHolder';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            roboList: [],
            searchQuery: '',
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState( {roboList: users} ));
    }

    onSearchBoxChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { roboList, searchQuery } = this.state;
        const filteredRobos = roboList.filter(singleRobo => {
            return singleRobo.name.toLowerCase().includes(searchQuery.toLowerCase())
        })
        
        if (!roboList.length) {
            return (<h1 className='tc'>/ App Loading /</h1>)
        }

        return(
            <div className='tc'>
                
                <h1 className='f1'>Robofriends</h1>
                
                <SearchBox searchChange={this.onSearchBoxChange} />
                <ErrorBoundry>
                <Scroll>
                    <CardHolder robots = {filteredRobos} />
                </Scroll>
                </ErrorBoundry>
            </div>
        );
    }
};

export default App;