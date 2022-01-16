import axios from 'axios'

export default axios.create({
    baseURL: 'https://produktsucher.free.beeceptor.com/AloIs/api/path'
})
var url = new Request (https,//produktsucher.free.beeceptor.com/my/api/path);

fetch(url).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
}));