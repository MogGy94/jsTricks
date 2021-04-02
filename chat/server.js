const io = require('socket.io')(3000);

const users = {};

io.on('connection',socket => {
   
    /* socket.emit('chat-message', 'Hello World'); */
    socket.on('send-chat-message', message => {
        /**Send Message to other Clients */
        console.log(message);
        socket.broadcast.emit('chat-message',{message, name: users[socket.id]});
    });

    socket.on('new-user',name =>{
        users[socket.id] = name;
        console.log("new User "+name);
        socket.broadcast.emit('user-connected',name);
        socket.emit('users-change',Object.values(users))
    } );

    socket.on('user-name-change', names =>{
        const {newName} = names;
        users[socket.id] = newName;
        socket.broadcast.emit('user-name-change',names);
    } )

    socket.on('disconnect', () =>{
        socket.broadcast.emit('user-disconnect', users[socket.id]);
        delete users[socket.id]
    })

});