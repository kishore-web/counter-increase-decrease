let value = document.querySelector("#value")
let buttons = document.querySelectorAll(".btn")
// console.log(buttons)
let count = 0

buttons.forEach((button)=> {
  button.addEventListener("click",(e)=>{
    let styles = e.currentTarget.classList
    
    if(styles.contains("decrease")) {
      count--
      value.style.color = "blue"
    } else if(styles.contains("increase")){
       count++
       value.style.color = "green"
    } else {
      count = 0
      value.style.color = "red"
    }
    value.innerText = count;
  })
})


