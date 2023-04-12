
//  activity 3
 var coordinatesP = document.getElementById("coordinates")

    document.addEventListener("click", function(event) {
     var x = event.clientX;
      var y = event.clientyY;         

      coordinatesP.innerHTML = "X: " + x + ", y: " + y;
   });
 const Heading = document.getElementById("Heading");
 const colorInput = document.getElementById("color-input");
 const colorButton = document.getElementById("color-button");


 colorButton.addEventListener("click", () => {
     const color = colorInput.value;
     Heading.style.color = color;

 });





//  Activity 2Create an image, button, and input in your HTML.
//       Change the source of the image to whatever image url is 
//      inside the input box when the button is clicked. -->

 function changeImageSource() {
    var imageUrl = document.getElementById("image-url-input").value;

     document.getElementById("my-image").src = imageUrl;
      }




//  activity 2
 const toggleBtn = document.getElementById("toggleBtn");
 const toggleImg = document.querySelector("#toggleImg");

 console.log(toggleBtn)

 toggleBtn.addEventListener("click",  () => {
   toggleImg.styled.display = "none"
    })






 console.log(document.getElementById("listWrapper") )

 console.log( document.querySelector("li") )

 console.log( document.getElementsByTagName("li") )

 const title = document.getElementById("heading")



 title.addEventListener("click", () => {
     console.log("clicked")
     title.textContent = "Updated"
      })

 title.addEventListener("mouseenter", () => {
     title.textContent = title.textContent.toUpperCase()
 } )

 title.addEventListener("mouseout", () => {
     title.textContent = title.textContent.toLowerCase()
 } )


 document.addEventListener("keypress", () => {
     console.log("key was pressed")
 })

 console.log( title.textContent)

 title.textContent = " my page title"

 const list = document.querySelector("#listWrapper")

 list.innerHTML += "<li>new item </li>"


 document.addEventListener("keypress", (e) => {
     console.log(e)
 })


//  Activity 1Create an image and a button in your HTML.
//   Make a toggle so that when you click the button, hide the image.
//  Then when you click the button again the image is visible








