//document.querySelector("button").addEventListener('click',continueButtonClicked)
function continueButtonClicked() {
    //print('dc');
    var newURL = "html/dashboard.html"//window.location.protocol + "//" + window.location.host + "/" + "html/dashboard.html";
    console.log('myUrl is :'+ newURL);
    window.location.replace(newURL);
    
}
