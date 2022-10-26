const mongoose = require("mongoose");
mongoose
  .connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB}`, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((e) => console.log(e));


 