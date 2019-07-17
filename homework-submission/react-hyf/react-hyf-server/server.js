const express = require("express");
const app = express();

app.use(express.static("/home/exilon/HYF/react/react-hyf/react-hyf-client/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/react-hyf-client/build/index.html'));
});

const PORT = 8088;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
