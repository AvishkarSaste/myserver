const express = require("express");
const cors = require("cors");
const {MongoClient}= require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
	const url = "mongodb+srv://jasimanaaa:NGQZ53t8dlBXHpU9@cluster0.elq70da.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con = new MongoClient(url);
	const db = con.db("msg_28june25");
	const coll = db.collection("messages");
	coll.find().toArray()
	.then(response=>{
		const r = parseInt(Math.random()*response.length);
		res.status(200).send(response[r]);
	})
	.catch(error=>{
		res.status(500).send(error);
	});
});

app.listen(9000,()=>{console.log("ready to serve @ 9000");});