$(document).ready(function(){

    var model = {
        selectedHero : null,
        showAdmin : false,
        avengersData : [
            {
                id : 1,
                name : "Thor",
                img : "./assets/thor.webp",
                clickCount : 0
            },
            {
                id : 2,
                name : "Iron Man",
                img : "./assets/ironman.jpg",
                clickCount : 0
            },
            {
                id : 3,
                name : "Spider Man",
                img : "./assets/spiderman.jfif",
                clickCount : 0
            },
            {
                id : 4,
                name : "Hulk",
                img : "./assets/hulk.jpg",
                clickCount : 0
            },
            {
                id : 5,
                name : "Black Widow",
                img : "./assets/blackwidow.jpg",
                clickCount : 0
            },
            {
                id : 6,
                name : "Captain America",
                img : "./assets/captain.jpg",
                clickCount : 0
            }
        ],
        currentLength : null
    
    }


    var view = {
        listCreated : false,

        init : function() {
            this.viewList()
            this.viewSelected(model.selectedHero)
        },
        
        viewList : function() {

            var list = document.querySelector("ul")
            if(model.currentLength == model.avengersData.length){

                if(this.listCreated){
                    for(let i=0; i < model.avengersData.length; i++){
                        var listItem = document.querySelectorAll("li")
                        
                        listItem[i].innerHTML = 
                        `
                        <div class="card list-cards">
                            <img src=${model.avengersData[i].img} class="card-img-top list-imgs clickable" alt="hero image" id=${model.avengersData[i].id}>
                            <p class="card-text">Clicks Count : ${model.avengersData[i].clickCount}</p>
                        </div>
                        `
                    }
                }
                else{
                    for(let i=0; i < model.avengersData.length; i++){
                        var newItem = this.createElement(model.avengersData[i])
                        list.appendChild(newItem)
                    }
                    
                    this.listCreated = true
                }
            }else{
                var newItem = this.createElement(controller.newHero)
                
                list.appendChild(newItem)
                model.currentLength++
            }
            
        },

        viewSelected : function(hero){
            var heroImage = document.querySelector(".main-image")
            heroImage.id = hero.id
            heroImage.src = hero.img

            var heroName = document.querySelector(".hero-name")
            heroName.innerHTML = hero.name

            var heroCount = document.querySelector(".counter")
            heroCount.innerHTML = hero.clickCount

        },

        viewAdmin : function(){
            var form = document.querySelector("form")
            if(model.showAdmin){
                form.style.display = "block"
            }
            else{
                form.style.display = "none"
            }
        },

        createElement : function(heroData){
            var listItem = document.createElement("li")
            
            listItem.innerHTML = 
            `
            <div class="card list-cards">
                <img src=${heroData.img} class="card-img-top list-imgs clickable" alt="hero image" id=${heroData.id}>
                <p class="card-text">Clicks Count : ${heroData.clickCount}</p>
            </div>
            `
            return listItem;
        },

        render : function(){
            this.viewList()
            this.viewSelected(model.selectedHero)
        }

        
    }

    var controller = {
        init : function(){
            model.selectedHero = model.avengersData[0]
            model.currentLength = model.avengersData.length

            view.viewSelected(model.selectedHero)
            
            var adminBtn = document.querySelector(".admin-btn")
            adminBtn.addEventListener("click", view.viewAdmin)

            $(document).on("click",".clickable", this.handleClick)

            var form = document.querySelector("form")
            form.addEventListener("submit",function(e){
                controller.handleSubmit(e)
            })

            form.addEventListener("change",function(e){
                controller.handleChange(e)
            })

            model.showAdmin = true; // setting user as admin

        },

        handleClick : function(){
            var filtered = model.avengersData.filter(item => item.id == this.id)
            model.selectedHero = filtered[0]

            if(filtered.length > 0){
                filtered[0].clickCount++
                view.render()
            }
            else{
                console.log("Not Found")
            }
        },

        newHeroId : null, 
        newHeroName : null, 
        newHeroImage : null, 
        newHeroCounter : null,
        
        handleChange : function(e){
            var nameError = imageError = counterError = false;

            this.newHeroId = model.avengersData.length + 1

            if(e.target.classList[1] == "name-input"){
                if(e.target.value == ""){
                    nameError = true
                }   
                else{
                    this.newHeroName = e.target.value;        
                }
            }
            if(e.target.classList[1] == "image-input"){
                if(e.target.value == ""){
                    imageError = true
                }
                else{
                    this.newHeroImage = e.target.value;
                }
            }
            if(e.target.classList[1] == "counter-input"){
                if(e.target.value == ""){
                    counterError = true
                }
                else{
                    this.newHeroCounter = e.target.value;
                }
            }

            if(nameError || imageError || counterError){
                this.validated = false
            }
            else{
                if(this.newHeroId != null && this.newHeroName != null &&
                    this.newHeroImage != null && this.newHeroCounter != null){
                        this.newHero.id = this.newHeroId
                        this.newHero.name = this.newHeroName
                        this.newHero.img = this.newHeroImage
                        this.newHero.clickCount = this.newHeroCounter

                        this.validated = true
                }

            }
        },
        
        handleSubmit : function(e){
            e.preventDefault();
            if(this.validated){
                model.avengersData.push(this.newHero)
                view.render()
                view.viewSelected(this.newHero)
                this.resetFormInputs()
            }else{
                alert("You are missing values in the form inputs")
            }
        },

        resetFormInputs : function(){
            const inputs = document.querySelectorAll('input');

            inputs.forEach(input => {
              input.value = '';
            });
        },

        newHero : {},
        validated : false
    }

    controller.init()
    view.init()
})

// Dr Strange
// https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871679-aif6.jpg  

// Captain Marvel
// https://media.vogue.fr/photos/5c7ed01e08858f0dc0e2d287/2:3/w_1920,c_limit/capmarvel.jpg