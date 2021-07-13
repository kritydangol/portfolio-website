const texts = ["Blog ","Curriculum Vitae ","Contact Us ","Research "];
let count = 0; //index of each word in array
let index = 0; //individual letters
let currentText = ''; //selected word
let letter = '';

(function type() {
	//reset to 0 after last word 
    if(count === texts.length){
    	count = 0;
    }

    currentText = texts[count]; //getting the word
    letter = currentText.slice(0, ++index); //getting each letter from the word

	document.querySelector('.typetext').textContent = letter; //adding the current value of letter to <Span tag>

	//getting another word from array after typing finish
    if(letter.length === currentText.length){
    	count++;
        index= 0; // so that we get first letter from the next word
    }
    setTimeout(type, 400);
})();



function myFunction() {

  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;

}

function outFunc() {

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";

}







