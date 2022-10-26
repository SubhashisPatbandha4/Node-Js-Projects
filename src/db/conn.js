const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/100meterraceDB", {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log("DB not connected"));