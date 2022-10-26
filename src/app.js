const express = require("express");
const router=require("./router/men")
const mensRanking = require("./models/mens");
require("./db/conn");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log(`running at port${PORT}`));