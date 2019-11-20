const chatServices = {
    NEW_MESSAGE:'Message From client to server',
    SEND_MESSAGE:'Message From server to client',
    CONNECTION:'connection',
    DISCONNECT:'disconnect',
    TYPING:'typing in fontend',
    STOP_TYPING:'typing stopped in frontend',
    NEW_USER:'register new user',
    UPDATE_USERS:'Updating Online User'
  }
  
  var {NEW_MESSAGE,SEND_MESSAGE,CONNECTION,DISCONNECT,TYPING,STOP_TYPING,NEW_USER,UPDATE_USERS} = chatServices;
  
  connections = [];
  users = [];
  
  
  const chat = io => {

    //Online Chat Service
    io.on(CONNECTION, (socket) => {
    //Pushing socket 
    connections.push(socket);
    console.log('Connected... : %s connected.',connections.length);

    socket.on(DISCONNECT,() => {
            connections.splice(connections.indexOf(socket.id),1);
        console.log('Disconnected... : %s remaining.', connections.length);
        console.log(socket.emailid);
        users = users.filter(user => user.emailid!=socket.emailid);
        updateContacts();
    });

    socket.on(NEW_MESSAGE,data => {
        io.sockets.emit(SEND_MESSAGE,data);
    });

    socket.on(NEW_USER,(data,callback) => {
        if(users.find( ele => data[1]===ele.emailid)){
        callback(false);
        }
        else{
        socket.emailid = data[1];
        users.push({
            username: data[0],
            emailid: data[1]
        });
        updateContacts();
        callback(true);
        }
    });

    updateContacts = () =>{
        io.sockets.emit(UPDATE_USERS,users);
    }

    });

}

module.exports = chat;