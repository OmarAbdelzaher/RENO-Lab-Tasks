$(document).ready(function(){
    $.getJSON("../data.json",function(data){
        for(let i = 0; i < data.length; i++){
            const card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = 
                `
                <div class="card">
                    <img src=${data[i].imagePath} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">
                        ${data[i].description}
                    </p>
                    <p class="sliced-text"></p>
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col">
                        <i class="far fa-calendar"></i>
                        <span class="date">Aug 5, 2013</span>
                        </div>
                        <div class="col">
                        <i class="fad fa-comments"></i>
                        <span class="comments">22 Comments</span>
                        </div>
                    </div>
                    </div>
                </div>
                `
            document.querySelector("#parent-div").appendChild(card);
            slice()
        }

    })

    // when click on any card, get its content and send it to the modal function
    $(document).on("click", ".card",(function(){

        var cardImage = this.children[0]
        var cardBody = this.children[1]
        var cardTitle = cardBody.children[0].innerText
        var cardDescription =  cardBody.children[1].innerText
        
        // sending data to modal
        showModal(cardTitle, cardDescription,cardImage.src);
    })
    )

    // a function to create a modal and append it to the body
    function showModal(titleHtml, contentHtml, modalImage) {
        const modal = document.createElement("div");
    
        modal.classList.add("modal");
        modal.innerHTML =
            `<div class="modal__inner">
                <div class="modal__top">
                    <div class="modal__title">${titleHtml}</div>
                    <button class="modal__close" type="button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal__content">
                    <img src="${modalImage}" alt="modal-image" class="modal-image">
                    <p>${contentHtml}</p>
                </div>
                <div class="modal__bottom"></div>
            </div>`
    
        modal.querySelector(".modal__close").addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    }

    // a function to slice/truncate the description of the content
    function truncateText(text, maxLength) {    
        if (text.length > maxLength) {
            text = text.substr(0,maxLength)+'...';
        }
        return text;
    }
    
    // a function to be called when the data is loaded successfully 
    function slice(){
        var cardsText = $('.card-text')
        var sliced = $('.sliced-text')
        
        // getting the original content and send it to the truncate function
        // then returning it to be inserted as a new content
        for(let i = 0; i < cardsText.length; i++){
            sliced[i].innerText = truncateText(cardsText[i].innerText,190)
        }
    }
});
