function empSelected() {
    console.log('cdyuysycjd');
    var site = "Emp_Details.html"
    window.location.assign(site);
}

function logout() {
    var myUrl = location.href;
    const myArray = myUrl.split("html");
    myUrl = myArray[0]
     location.replace(myUrl+"index.html");
    
}