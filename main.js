//Program Title

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //WHATEVER THIS LET STUFF IS CALLED
  let question = document.getElementById("question").value.toLowerCase();
  let randNum = Math.random();
  //THE ACTUAL IF ELSE STATEMENT
  if (question.length === 0) {
    //IF QUESTION IS LEFT BLANK
    document.getElementById("answer").innerHTML = `      <p>
            <strong
              >Answer: <span class="green">Please ask a question...</span></strong
            >
          </p>
          `;
  } else if (question === "does a magic 8 ball actually work?") {
    // IF A MERE MORTAL DARES TO DOUBT I, THE MOST KNOWLEDGABLE MAGIC EIGHT BALL OF THEM ALL
    document.getElementById("answer").innerHTML = `      <p>
            <strong
              >Answer: <span class="green">How dare you doubt me!</span></strong
            >
          </p>
          `;
  } else if (question === "is javascript awesome?") {
    // IF ASKED ABOUT JAVASCRIPT
    document.getElementById("answer").innerHTML = `      <p>
         <strong
              >Answer: <span class="green">Of course!</span></strong
          >
          </p>
           `;
  } else if (question === "will it snow") {
    // IF ASKED ABOUT THE WEATHER
    document.getElementById("answer").innerHTML = `      <p>
         <strong
             >Answer: <span class="green">You live in Canada, what did you expect?</span></strong
            >
            </p>
          `;
  } else {
    let randNum = Math.random();
    if (randNum <= 0.2) {
      document.getElementById("answer").innerHTML = `      <p>
        <strong
             >Answer: <span class="green">Without a Doubt.</span></strong
         >
         </p>
          `;
    } else if (randNum <= 0.4) {
      document.getElementById("answer").innerHTML = `      <p>
            <strong
                 >Answer: <span class="green">As I see it, yes.</span></strong
             >
             </p>
              `;
    } else if (randNum <= 0.6) {
      document.getElementById("answer").innerHTML = `      <p>
                <strong
                     >Answer: <span class="green">Concentrate and ask again.</span></strong
                 >
                 </p>
                  `;
    } else if (randNum <= 0.8) {
      document.getElementById("answer").innerHTML = `      <p>
        <strong
             >Answer: <span class="green">Don't count on it.</span></strong
         >
         </p>
          `;
    } else {
      document.getElementById("answer").innerHTML = `      <p>
            <strong
                 >Answer: <span class="green">Outlook not so good,</span></strong
             >
             </p>
              `;
    }
  }
}
