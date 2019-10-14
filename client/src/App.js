import React, { Component } from 'react';
import ChatApp from './Components/ChatApp';
import Editor from './Components/Editor';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            <Route exact path="/editor">
                <Editor/>
            </Route>
            <Route exact path="/">
                <ChatApp/>
            </Route>
            </Router>
        );
    }
}

export default App;