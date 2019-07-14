const express = require('express');

const route = express();

route.use(express.static())


const Port = procces.env.PORT || 3000;
route.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})