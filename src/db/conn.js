const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registeryourself",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(() => {
    console.log(`connection successful conn1`);
}).catch((e) => {
    console.log(`no connection established conn1`);
})


// mongoose.yourinfo = mongoose.createConnection("mongodb://localhost:27017/yourinfo",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
// }).then(() => {
//     console.log(`connection successful conn2`);
// }).catch((e) => {
//     console.log(`no connection established conn2`);
// });

// module.exports = mongoose;