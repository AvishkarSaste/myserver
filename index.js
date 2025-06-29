const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
	const url = "mongodb+srv://jasimanaaa:NGQZ53t8dlBXHpU9@cluster0.elq70da.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con = new MongoClient(url);

	try {
		await con.connect(); // ✅ REQUIRED to avoid 500 error
		const db = con.db("msg_28june25");
		const coll = db.collection("messages");
		const all = await coll.find().toArray();
		const r = Math.floor(Math.random() * all.length);
		res.status(200).send(all[r]);
	} catch (error) {
		res.status(500).send({ error: "Server error", message: error.message });
	} finally {
		await con.close();
	}
});

app.listen(9000, () => {
	console.log("ready to serve @ 9000");
});
