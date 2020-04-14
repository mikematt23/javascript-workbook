
const submit = document.querySelector("button")

submit.addEventListener("click",function(){
  let word = document.querySelector("input").value
  let vowels = "aeiou"
  if (
    word.charAt(0) === "a" ||
    word.charAt(0) === "e" ||
    word.charAt(0) === "i" ||
    word.charAt(0) === "o" ||
    word.charAt(0) === "u"
  ) {
    document.getElementById("result").innerText = word + "yay";
  } else {
     for(let i =0; i<word.length; i++){
       if (vowels.includes(word[i]) === true) {
         let result = word.substring(i) + word.substring(i,0) + "ay";
         document.getElementById("result").innerText = result;
         break;
       } else {
         result = "invalid"
         document.getElementById("result").innerText = result;
       }
    }  return result;
  }
})