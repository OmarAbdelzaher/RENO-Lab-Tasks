// Event Delegation

// var addDivBtn = document.querySelector("button")
// var counter = 0

// addDivBtn.addEventListener("click", createDiv)

// function createDiv(){
//     var purpleDiv = document.createElement("div");
//     purpleDiv.classList.add('purple')
//     purpleDiv.style.width = "200px";
//     purpleDiv.style.height = "200px";
//     purpleDiv.style.background = "purple";
//     purpleDiv.style.marginTop = "10px"
//     purpleDiv.style.marginBottom = "10px"
//     purpleDiv.style.color = "#fff"
//     purpleDiv.innerHTML = counter++
//     document.body.append(purpleDiv);
// }

// function addGlobalEventListener(type, selector,callback){
//     document.documentElement.addEventListener(type,function(e){
//         if(e.target.matches(selector)){
//             callback(e)        
//         }
//     })
// }

// addGlobalEventListener("click",".purple",function(e){
//     alert(e.target.innerHTML)
// })

// Form Validation

var form = document.querySelector("form")
var input = document.querySelector("input")

form.addEventListener("submit", function(e){
    e.preventDefault();
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(input.value == ""){
        alert("The input can't be empty")
    }

    else{
        if(format.test(input.value)){
            createLabel("The input can't contain symbols","red")
        }
        else{
            createLabel(input.value,"green")
            input.value = ""
        }
    }

})

function createLabel(errorText,color){
    var label = document.createElement("label")
    label.addEventListener("click",removeLabel)
    label.style.color = color
    label.innerHTML = errorText
    form.appendChild(label)
}

function removeLabel(e){
    form.removeChild(e.target)
}

