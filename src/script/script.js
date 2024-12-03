'use strict';

let imgBox = document.getElementById("image-box");
let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("qr-text");
let errorMessage = document.getElementById("error-message")

function generateQR(){
  if(qrText.value.length > 0){
    // Using The qr code generator API below
   qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
   + qrText.value;
   qrText.value = "";
  } 
}