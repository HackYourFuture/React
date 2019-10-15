const express = require('express');

const app = express();

app.use(express.static('../react-hyf-client/build'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server start on port ${PORT}`));
