var typed = new Typed('#element', {
    strings: ['Web Developer', 'Video Editor', 'Coding enthusiast'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


function myFunction() {
    // Get the text field
    var copyText = document.getElementById(".email");
    copyText = "hemantyadav8006@gmail.com";

    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the Email!");
  }