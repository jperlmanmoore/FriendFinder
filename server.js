const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, () => console.log("App listening on PORT " + PORT));








// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })