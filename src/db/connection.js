const mongoose = require("mongoose");

//connectintion creation with mongodb

mongoose.connect(
  "mongodb://localhost:27017/markmyopinion",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) console.log("db connected");
    else console.log("fail to connect");
  }
);
