const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://gretatomasoni:0000@cluster0.ightwgc.mongodb.net/note?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connesso.");
    } else {
      console.log(`Problemi con la connessione:  ${err}`);
    }
  }
);

require("./nota");
