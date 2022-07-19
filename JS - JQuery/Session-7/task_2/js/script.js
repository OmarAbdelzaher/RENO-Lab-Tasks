var root = document.querySelector(":root");
var selector = document.querySelector(".form-select");

selector.addEventListener("change", function (e) {
    root.style.setProperty("--primary-bg", e.target.value);
});

var themeMode = document.querySelector(".theme-mode");

window.onload=function(){
    var theme = localStorage.getItem('data-theme');

    if(theme == 'light'){
      document.documentElement.setAttribute('data-theme', 'light');
      themeMode.innerHTML = "Light Theme"
    }else if(theme == ''){
      document.documentElement.setAttribute('data-theme', 'light');
      themeMode.innerHTML = "Light Theme"
    }else if(theme == 'dark'){
      document.documentElement.setAttribute('data-theme' , 'dark');
      document.getElementById("checkbox").checked = true;
      themeMode.innerHTML = "Dark Theme"
    }


    var userName = document.querySelectorAll(".to-be-changed-name")
    var location = document.querySelector(".to-be-changed-location")
    var picture = document.querySelectorAll(".to-be-changed-pic")

    userName.forEach(function(item){
        item.innerHTML = "John Doe"
    })

    location.innerHTML = "Cairo"

    picture.forEach(function(item){
        item.style.backgroundImage = "url('../assets/speaker-3.jpg')";
        item.style.backgroundRepeat = "no-repeat";
        item.style.backgroundSize = "cover";
    })
  }

function toggle(a){
    if(a.checkbox.checked==true){
      document.documentElement.classList.add('transition');
      document.documentElement.setAttribute('data-theme', 'dark');
      themeMode.innerHTML = "Dark Theme"
      localStorage.setItem('data-theme','dark');
    }
    else if(a.checkbox.checked==false){
      document.documentElement.classList.add('transition');
      document.documentElement.setAttribute('data-theme', 'light');
      themeMode.innerHTML = "Light Theme"
      localStorage.setItem('data-theme','light');
    }
};
