import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import AuthorDetails from './components/AuthorDetails';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/author" exact component={AuthorDetails} />
					
				</Router>
			</div>
		);
	}
}

export default App;
