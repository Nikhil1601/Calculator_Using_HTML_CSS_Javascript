let screen = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let screenval="";
for(item of buttons){
  item.addEventListener('click',(e)=>{
    buttontext=e.target.innerText;
    // console.log('buttontext is',buttontext);
    if(buttontext=='x'){
      buttontext='*';
      screenval+=buttontext;
      screen.value=screenval;
    }
    else if(buttontext=='√'){
      buttontext='**0.5';
      screenval+=buttontext;
      screen.value=screenval;
    }
    else if(buttontext=='π'){
      buttontext="3.14159";
      screenval+=buttontext;
      screen.value=screenval;
    }
    else if(buttontext=='Enter'){
      screen.value=eval(screenval);
    }
    else if(buttontext=='del'){
      screen.value=screen.value.substr(0,screen.value.length-1)
      // screen.value=screenval
    }
    else if(buttontext=='AC'){
      screenval="";
      screen.value=screenval;
    }
    else{
      screenval+=buttontext;
      screen.value=screenval;
    }
  })
}
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};