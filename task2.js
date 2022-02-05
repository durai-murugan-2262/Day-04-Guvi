var xhr = new XMLHttpRequest();
xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var data = JSON.parse(xhr.response);
    
      for (var i = 0; i < data.length; i++) {
        var user = data[i];
        console.log(`
        ${user.flag}
        `);
      }
    } else {
      console.log("Data is not available");
    }
  };