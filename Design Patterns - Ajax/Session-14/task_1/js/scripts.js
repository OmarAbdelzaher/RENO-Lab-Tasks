class statsComponent {
    init (){
        this.cacheElements()
        eventMed.on("moviesFetched",this.render.bind(this))
    }

    cacheElements (){
        this.$statsDiv = $(".stats-div")
    }
    
    render(stats){
        this.$statsDiv.html(
        `
        <div class="stats-details">
            <h5>Current page: ${stats.currentPage}</h5>
            <h5>Number of Movies: ${stats.numOfMovies}</h5>
            <h5>Top rated movie: ${stats.topRated}</h5>
            <h5>Rating: ${stats.rating}</h5>
        </div>
        `)
    }
}

class moviesComponent{
    
    constructor(){
        this.movies = []
        this.stats = {}
        this.API_Key = "d82b34636f65e9eb383a5d6fa40b82bb"

    }

    init(){
        this.cacheElements();
        this.bindEvents();
        this.render()
    }

    async getMovies(pageNum){
        await $.get(this.updateUrl(pageNum),(data)=>{
            this.movies = data.results
            this.stats = this.getStats(data)
            console.log(this.stats)

        })
    }

    cacheElements(){
        this.$moviesDiv = $(".movies-div")
    }

    bindEvents(){
        self = this
        $(document).on("click", ".card", function(){
            let movie = self.movies.filter(item => item.id == this.id)
            self.showModal(movie[0].title, movie[0].overview, movie[0].poster_path, movie[0].vote_average, movie[0].vote_count)
        })

        eventMed.on("pageChanged",this.render.bind(this))
    }

    showModal(movieTitle, movieDescription, movieImage, movieRating, voteCount) {
        const modal = document.createElement("div");
        
        modal.classList.add("modal");
        modal.innerHTML =
            `<div class="modal__inner">
                <div class="modal__top">        
                    <button class="modal__close" type="button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal__content">
                    <img src="https://image.tmdb.org/t/p/w500/${movieImage}" alt="modal-image" class="modal-image">
                    <div class="modal__details">
                        <h3 class="modal__title">${movieTitle}</h3>
                        <h5>IMDB Rating: ${movieRating}/10 (${voteCount} votes)</h5>
                        <p>${movieDescription}</p>
                    </div>
                </div>
            </div>`
    
        modal.querySelector(".modal__close").addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    }

    async render(pageNum){
        await this.getMovies(pageNum)

        this.$moviesDiv.html("")
        for(let i = 0; i < this.movies.length; i++){
            const card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = 
            `
                <div class="card" id="${this.movies[i].id}">
                    <img src= https://image.tmdb.org/t/p/w500/${this.movies[i].poster_path} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.movies[i].title}</h5>
                        <h6 class="card-text">${this.movies[i].vote_average}</h6>
                    </div>
                </div>
            `
            this.$moviesDiv.append(card)
        }

        eventMed.emit("moviesFetched",this.stats)
    }

    getStats(movies){
        let ratingsArr = []
        
        for(let i = 0; i < movies.results.length; i++){
            ratingsArr.push(movies.results[i].vote_average)
        }
        
        let maxRating = Math.max(...ratingsArr)
        let topRatedMovie = movies.results.filter(movie => movie.vote_average == maxRating)
        
        let moviesStats = {
            currentPage : movies.page,
            numOfMovies : movies.results.length,
            topRated : topRatedMovie[0].title,
            rating : maxRating,
        }

        return moviesStats
    }

    updateUrl(pageNo){
        var url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_Key}&language=en-US&page=${pageNo}`
        return url
    }
}

class paginationComponent{
    constructor(){
        this.pageNum = 1
    }

    init(){
        this.cacheElements()
        this.bindEvents()
        this.render()

        eventMed.emit("pageChanged",this.pageNum)
    }

    cacheElements(){
        this.$paginationDiv = $(".pagination-div")
    }

    bindEvents(){
        $(document).on("click", ".prev", this.decrementPage.bind(this))
        $(document).on("click", ".next", this.incrementPage.bind(this))
    }

    decrementPage(){
        this.pageNum--
        if(this.pageNum < 1){
            this.pageNum = 1
        }
        eventMed.emit("pageChanged",this.pageNum)
    }

    incrementPage(){
        this.pageNum++
        eventMed.emit("pageChanged",this.pageNum)
    }

    render(){
        this.$paginationDiv.html(
            `
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link prev">Previous</button></li>
                    <li class="page-item"><button class="page-link next">Next</button></li>
                </ul>
            </nav>
            `
        );
    }
}

class eventsMediator {
    constructor(){
        this.events = {}
    }

    on (eventName, callbackfn) {
      this.events[eventName] = this.events[eventName]
        ? this.events[eventName]
        : [];
      this.events[eventName].push(callbackfn);
    }

    emit (eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function (callBackfn) {
          callBackfn(data);
        });
      }
    }
};

const eventMed = new eventsMediator()

let moviesObj = new moviesComponent()
moviesObj.init()

let pageObj = new paginationComponent()
pageObj.init()

let statsObj = new statsComponent()
statsObj.init()