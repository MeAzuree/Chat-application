const express = require("express");
const app = express();
const path = require("path");

// On autorise le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

const http = require('http');

app.use(express.static(__dirname));

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


var users = [];
var wrintingUsers = [];

function userLeft(iduser){
    var index = users.indexOf(iduser);
    if (index > -1){
        users.splice(index,2);
    }
    return users;
} 

// On écoute l'évènement connexion de socket.io
io.on("connection", (socket) => {
    console.log("Une connexion s'active");

    socket.on("join", (username) => {
        users.push(socket.id); 
        users.push(username);
        console.log(users);
        io.emit('List', users);
        io.emit("chat_message", {name : username, message : "is connected"});   
        
    });

    // On écoute les déconnexions
    socket.on("disconnect", () => {
    const index = users.indexOf(socket.id);
    io.emit("chat_message", {name : users[index+1], message : "left"}); 
    users = userLeft(socket.id);
    io.emit('List', users);
    console.log("utilisateur déconnecté");  
    });    

    // On gère le chat
    socket.on("chat_message", (msg) => {
        io.emit("chat_message", msg);
    })

    socket.on('typing', (wrintingUsers) => {
        const index = users.indexOf(socket.id);
        wrintingUsers.push(users[index+1]);
        io.emit('typing', users[index+1], wrintingUsers);
      })
    
});

// On demande au serveur de répondre sur ce port
server.listen(3000, () => {
    console.log('listening on *:3000');
  });