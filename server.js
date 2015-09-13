var axios = require('axios');

axios.get("https://api.hypem.com/v2/users/mattiden/favorites?key=swagger")
.then(function(res){
  console.log(res);
})
