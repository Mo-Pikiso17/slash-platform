db.collection("data").get().then(data=>{
    data.docs.forEach(elem =>{
        console.log(elem.data())
    })
})