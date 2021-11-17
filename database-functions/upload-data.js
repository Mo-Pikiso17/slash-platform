var file = document.querySelector("#image");
var btn = document.querySelector("#btn");
var data = {}
function upload(){
    db.collection("data").add(data)
    document.querySelector("#tittle").value = " "
    document.querySelector("#name").value =" "
    document.querySelector("#tags").value = " "
    file.files.length = 0;

}
btn.addEventListener("click", upload)

function getElements(url){
    var tittle = document.querySelector("#tittle").value
    var name = document.querySelector("#name").value
    var tags = document.querySelector("#tags").value
    data['url']= url;
    data['tittle'] = tittle;
    data['tags'] = tags;
    data['name'] = name;

     document.querySelector("#tittle").value = " "
    document.querySelector("#name").value =" "
    document.querySelector("#tags").value = " "
    file.files.length = 0;

}


function readAfile(){
    console.log(file.files[0])
    var actualFile = file.files[0];
    var fileReader = new FileReader();
    fileReader.onload = (e)=>{
        var result = e.target.result
        btn.style.display =  "block";
        getElements(result);
    }
    fileReader.readAsDataURL(actualFile);
}
file.addEventListener("change", readAfile)