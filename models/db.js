const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://ripion:ripion9553@cluster0.ztq9fun.mongodb.net/userDemoDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB is connected!!"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
