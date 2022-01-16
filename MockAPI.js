const apiBaseUrl = "https://produktsucher1.free.beeceptor.com";

function getProducts(){
	const endpoint = "/market";
  
	axios.get(`${apiBaseUrl}${endpoint}`).then(response=>{
  	const users = response.data.data;
  	console.log(users);
  });	
}


function addProduct(){
const endpoint = "/market";
	axios.post(`${apiBaseUrl}${endpoint}`, {
    MarketName: 'Supermarkt XY',
    MarketStreet: 'Hauptstraße 12',
    MarketArea : "50667 Köln",
    MarketLogo : "../assets/logo.png"
    
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


getProducts();
addProduct();