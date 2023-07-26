function logout() {

    var myUrl = location.href;
    const myArray = myUrl.split("html");
    myUrl = myArray[0]
     location.replace(myUrl+"index.html");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function displayVisaDetails(){
    
 console.log("Displaying Visa Details");
  modal.style.display = "block";
  modalImg.src = "../images/visa.jpeg";
  //captionText.innerHTML = this.alt;
}

function displayMedicalDetails(){
    
    console.log("Displaying Visa Details");
     modal.style.display = "block";
     modalImg.src = "../images/prescribtion.jpeg";
     //captionText.innerHTML = this.alt;
   }

   function displayVaccinationDetails(){
    
    console.log("Displaying Visa Details");
     modal.style.display = "block";
     modalImg.src = "../images/certi.jpg";
     //captionText.innerHTML = this.alt;
   }


// When the user clicks on <span> (x), close the modal
function closeVisaDetails() {
    console.log("closing Visa LOgs");
  modal.style.display = "none";
}