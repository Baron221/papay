console.log("Web Server boshlash");
const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");

let session = require("express-session");
const MongoDbStore = require("connect-mongodb-session")(session);
const store = new MongoDbStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

// 1 express ga kirib kelyatgan malumotlarga bogliq bolgan kodlar yoziladi. KIRISH kodlari
app.use(express.static("public"));
app.use(express.json()); // kirib kelyatgan json formatdagi data ni objectga ogiradi
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true })); //html forumdan request qiladi
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());

//2 Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 30, //for 30 minutes
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  res.locals.member = req.session.member;
  next();
});
//3 BSSR -backend serverside render  VIEWS ga bogliq kodlar
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing
app.use("/resto", router_bssr);
app.use("/", router);

const server = http.createServer(app);

/**Socket.io Backend Server */
const io = require("socket.io")(server, {
  serveClient: false,
  origins: "*:*",
  transport: ["websocket", "xhr-polling"],
});

let online_users = 0;
io.on('connection', function(socket){
  online_users++;
  console.log("New user total:" , online_users);
  socket.emit('greetMsg',{text:"Welcome"});
  io.emit('infoMsg' , {total:online_users});

  socket.on('disconnect', function(){
    online_users--;
    socket.broadcast.emit('infoMsg' , {total:online_users});
    console.log('client disconnected , total:', online_users)
  })


  socket.on('createMsg' , function(data){
    console.log("createMsg",data);
    io.emit('newMsg');
  })
  // socket.emit()
  // socket.broadcast.emit()
  // io.emit()
})

module.exports = server;
