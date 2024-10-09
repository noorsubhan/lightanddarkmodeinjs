var body=document.querySelector('body')
var modeIcon=document.querySelector('.modeIcon')
var theme="light"
console.log(theme)
function modechange(){
  if(theme==="light")
{
  theme="dark"
  body.classList.add("dark")
  modeIcon.src="./night-mode.png"
  console.log(theme)


} else{
  body.classList.remove("dark")
  modeIcon.src="./sun.png"
  theme="light"
  console.log(theme)
}
}
