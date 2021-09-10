var db = require("../database-functions/upload-data");
var dbLogic = db(pool);
var fs = require("fs");
/*
  {
  artistName: 'Mthobisi',
  trackName: 'fire',
  mp3: 'init.m4a',
  image: 'WhatsApp Image 2021-08-13 at 12.59.39.jpeg',
  date: '2021-08-31'
}
*/
module.exports = function factory() {
  function setData(data){
  }
  return {
    setData
  }
};
