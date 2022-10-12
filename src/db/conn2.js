const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yourinfo",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(() => {
    console.log(`connection successful conn2`);
}).catch((e) => {
    console.log(`no connection established conn2`);
})
