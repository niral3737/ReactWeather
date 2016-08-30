var axios = require('axios');

const OPEN_WEATHERMAP_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b3ff042a48cd4b58358fdb950611c612&units=metric';
module.exports = {
  getTemp : function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHERMAP_BASE_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },
    function (res) {
      throw new Error(res.data.message);
    });

  }
}
