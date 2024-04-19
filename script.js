document.addEventListener("DOMContentLoaded", function() {
    var text = document.querySelector("#text1");
    var button = document.getElementById("button");
    var con_text = document.getElementById("con_text");
  
    button.addEventListener("click", con);
  
    function con() {
      var wordReplacements = {
        "gaza":"g_A_za"
      };
  
      var inputText = text.value;
      var inputWords = inputText.split(" ");
  
      for (let i = 0; i < inputWords.length; i++) {
        if (wordReplacements[inputWords[i]]) {
          inputWords[i] = wordReplacements[inputWords[i]];
        }
      }
  
      con_text.innerText = inputWords.join(" ");
    }
  });  
