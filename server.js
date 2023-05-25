const http =require("http");
const mongodb =require("mongodb");

let db;
const connectionString ="mongodb+srv://baronjon080:YQ6VI7K73QOkvlVe@cluster0.mabua11.mongodb.net/Reja?retryWrites=true&w=majority"

mongodb.connect(connectionString,{useNewUrlParser:true, 
    useUnifiedTopology:true,
},(err,client)=> {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app =require("./app");
        const server = http.createServer(app);
        let PORT = 3003;
        server.listen(PORT , function(){
            console.log(`The server is running succesfully on port : ${PORT} , http://localhost:${PORT}`)
        });
    }    
});    
