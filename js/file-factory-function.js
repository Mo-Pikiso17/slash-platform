var img = document.querySelector("img");
var audio = document.querySelector("audio");
var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
var obj = {};
function getData() {
  var artistName = document.querySelector("#name").value;
  var trackName = document.querySelector("#trackT").value;
  //------making data
  obj["artistName"] = artistName;
  obj["trackName"] = trackName;
  ///----making data
  ///mp3---file
  var filInputMp3 = document.querySelector("#fileT");
  var actulF = filInputMp3.files[0];
  var reader = new FileReader();
  reader.onload = function () {
    var mp3 = reader.result;
    audio.setAttribute("src", mp3);
    obj["mp3"] = mp3;
  };
  reader.readAsDataURL(actulF);
  ///---file---image
  var filInputImage = document.querySelector("#fileI");
  var actulFImage = filInputImage.files[0];
  var readerImage = new FileReader();
  readerImage.onload = function () {
    var image = readerImage.result;
    img.src = image;
    obj["image"] = image;
  };
  readerImage.readAsDataURL(actulFImage);
  ////setting the data
  //----date
  var date = document.querySelector("#date").value;
  obj["date"] = date;
  ////preview the details
  var div = document.querySelector(".preview");
  div.style.display = "block";

  //----set previews for upload

  //--set previews for upload
}
 function setData() {
  var name = obj.artistName != "";
  var track = obj.trackName !== "";
  var check = obj.hasOwnProperty("image");
  var checked = obj.hasOwnProperty("mp3");
  var checkkop = obj.hasOwnProperty("date");
  if (name && track && check && checked && checkkop) {
    var err = document.querySelector("#err");
    err.style.color = "green";
    err.innerHTML = "Submit Successful";
    db.collection("data").add({
        artistName: obj.artistName,
        trackName: obj.trackName, 
        mp3: obj.mp3,
        image: obj.image,
        date : obj.date
    })
  } else {
    var err = document.querySelector("#err");
    err.style.color = "red";
    err.innerHTML =
      "Please make sure you fill out all the required information.";
    return "false";
  }
}
