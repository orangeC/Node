var express = require ("express");
var checkout = require("./public/modules/checkout")
var bodyParser = require("body-parser");
var app = express();

app.use( express.static("public") )
app.use(bodyParser.urlencoded({extended:false}))


app.post ("/aaa",function (req,res){//读取所有
	checkout(req.body,function(result){
		res.send(result)
	})
})

app.listen(5000,function(){
	console.log("服务器启动成功lalaal！")
})




// // app.get( "/abc",function(req,res){
// // 	var username = "cheng"
// // 	var password = "123"
// // 	if(req.query.username == username && req.query.password == password){
// // 		res.send("登陆成功")

// // 	}else{
// // 		res.send("输入有误，请重新输入")
// // 	}
// // } )




// var http = require("http");
// http.createServer(function(req,res){
// 	res.end("hehe")
// }).listen("3000")