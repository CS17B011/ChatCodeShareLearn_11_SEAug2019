import React, { Component } from 'react';
import ChatApp from './Components/ChatApp/ChatApp';
import Editor from './Components/Editor/Editor';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            
            <Route exact path="/">
                <ChatApp/>
            </Route>
            <Route exact path="/editor">
                <Editor/>
            </Route>
            
            </Router>
        );
    }
}

export default App;