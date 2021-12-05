// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(heart => heart.addEventListener("click",(event)=>{  
  mimicServerCall()
  .then ((res)=> {
    if(event.target.textContent=== FULL_HEART)
    {
      event.target.textContent = EMPTY_HEART;
      event.target.classList.remove("activated-heart");
      return      
    }
    event.target.textContent = FULL_HEART;    
    event.target.classList.add("activated-heart")
  })
  .catch((error)=>{
    console.log(error)

    const errMessage = document.querySelector("#modal-message");
    const errShow = document.querySelector("#modal");
    errShow.classList.remove("hidden");
    errMessage.textContent = error;
    setTimeout(()=>{errShow.classList.add("hidden")}, 3000)
  });
}
))






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
