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
};


function check(){
    let newTab = document.createElement('a');
    newTab.href = "https://drive.google.com/file/d/1Am59QK_aBEPMzQSrE3JXaUNAicDuLywV/view?usp=sharing";
    newTab.target = "_blank";
    newTab.click();
};



const mainMenu = document.querySelector('.links');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);


function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}


function hide() {
    mainMenu.style.top = '-100%'
}