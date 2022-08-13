import { 'words' } from "words.js";

const sc = ["!", "@", "%", "^", "&"];

word = words[Math.floor(Math.random() * words.length)];
word = word[0].toUpperCase() + word.substring(1);


$("#password").text(sc[Math.floor(Math.random() * sc.length)] + word + Math.floor(Math.random() * 99));




$("#password").click(function() {
navigator.clipboard.writeText($("#password").text()).then(function() {
alert("Password copied to clipboard");
}, function(err) {
  console.error(err);
});
});
