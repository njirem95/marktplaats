const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const chatMessage = 'chat message';

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    // broadcast to all connected users that a new user has connected
    socket.broadcast.emit(chatMessage, 'a new user connected');

    socket.on('set nickname', function (nickname) {
        if (nickname.length < 1) {
            // invalid nickname; send failure response back to client.
            return;
        }

        // use nickname thingy 
        socket.nickname = nickname;
        console.log('created nickname', socket.nickname);
    });

    socket.on(chatMessage, function (message) {
        let author = "Anonymous";
        if (socket.nickname !== undefined) {
            author = socket.nickname;
        }

        const msg = author + " : " + message;

        io.emit(chatMessage, msg);
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');  
    });
});

http.listen(3000, function() {
    console.log('listening on port 3000');
});