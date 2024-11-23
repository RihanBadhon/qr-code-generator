# Making A QR Code Generator Application

### Learn how to create a simple QR Code Generator web application using basic HTML, CSS, and JavaScript. The steps below will guide you to the basic elements from the design of the web application to the JavaScript functionality.

# Overview

### This application uses:

##  * HTML to structure the application
## * CSS for the design and alignment
## * JavaScript & API for functionality 

#  First Step: Setting Up the Basic First

## index.html: The main HTML file.
## style.css: css file contain the design and adjustment of        the web application
## script.js: JavaScript file containing the functionality & API


# HTML: index.html

```
 <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
    </head>
  <body>
    <div class="container">
        <p>Enter your text or URL</p>
        <input type="text" placeholder="Text or URL" id="qr-text">
        <div id="image-box">
            <img src="" id="qr-image">
        </div>
        <button onclick="generateQR()">Generate QR Code</button>
    </div>   
  </body>
</html>
```

# CSS: style.css

```
body {
      background-image: url('../img/qr\ code\ background.avif');  
      background-size: cover;                    
      background-position: center;              
      background-repeat: no-repeat;             
      margin: 0;                                
      height: 100vh;
      align-items: center;                                       
      
                                    
}

.container {
    height: 400px;
    width: 400px;
    padding: 25px 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;

}
```
# JavaScript: Define variables 

```
'use strict';

let imgBox = document.getElementById("image-box");
let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("qr-text");




```

# JavaScript: Using function

```
function generateQR(){
  if(qrText.value.length > 0){
    // Using The qr code generator API below
   qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
   + qrText.value;
   qrText.value = "";
  } 
}

```
# if Condition

```
if(qrText.value.length > 0){
    // Using The qr code generator API below
   qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
   + qrText.value;
   qrText.value = "";
  } 
```


# API: For generating the qr code

```
"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

```
# Final Step: Run the game

### 1. Save your index.html, style.css, and script.js files
### 2. open the index.html in any web browser
### 3. Type any text or any URL to see the functionality!



