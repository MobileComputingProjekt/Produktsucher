const  express = require('express');
var router = express.Router();
const app = express();
const cors = require('cors');
const { default: ProductSelection } = require('./app/screens/ProductSelection');
const { request } = require('express');

const PORT = process.env.PORT ||19000;

app.use(express.json());
app.use(cors());

/* GET users listing. */
const router = require(ProductSelection.js);
app.use('/MockAPI', router);
app.get('/MockAPI', cors(), (req, res) => {
  // Kommentiere diese Zeile aus
  //res.send('respond with a resource');

  // Und füge soetwas ein
  res.json([{
    MarketName: "Supermarkt XY",
    MarketStreet: "Hauptstraße 12",
    MarketArea : "50667 Köln",
    MarketLogo : "../assets/logo.png"
  }, {
    ExampleProduct: "Seelachsmuß",
    ExamplePrice:"3,99€",
    MapPath: "../assets/Map1.png"
  }]);
  app.get("/market", (req, res) => {
    request(
      "https://produktsucher.free.beeceptor.com",
      function(error, response, body) {
        if(!error && response.statusCode == 200) {
          console.log(response);
       } })
  
      }
    )
    })
  app.get('/',(req,res)=>{
    //res.send({data:"data"})
    console.log(console.log("request is recieved"))
});

module.exports = router;
