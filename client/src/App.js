import React, { Component } from 'react';
import ChatApp from './Components/ChatApp/ChatApp';
import Editor from './Components/Editor/Editor';
import Login from './Components/Login/js/Login';
import io from 'socket.io-client';
import {NEW_CODE} from './Components/chatservice/events.js';
import uuid from 'react-uuid'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


class App extends Component {

    socket = io('http://localhost:4000');

    state = {
        id : uuid()
    }

    sendMessage = (code) => {
        console.log(this.socket);
        var data = {
            cls:"replies",
            val: code,
            id: this.state.id
        };
        this.socket.emit(NEW_CODE,data);
    }

    render() {
        return (
            <Router>
            <Route exact path="/">
                <ChatApp codeID = {this.state.id}/>
            </Route>
            <Route exact path="/editor">
                <Editor sm = {this.sendMessage}/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            </Router>
        );
    }
}

export default App;