var swiper = new Swiper(".mySwiper", {
	slidesPerView: 5,
	spaceBetween: 30,
	slidesPerGroup: 5,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});

var flagsComponent = {
    CountriesData : [],

    init : function(){
        this.cacheElements();
        this.bindEvents();
        this.render();
    },

    fetchData : async function(){
        await $.ajax('https://restcountries.com/v3.1/all',
        {
            success: function (data) {
                flagsComponent.CountriesData = data
            }
        })
        return this.CountriesData
    },

    cacheElements: function () {
        this.$template = $('#flags-template').html();
        this.$target = $('#target')
    },

    bindEvents: function () {
        $(document).on('click', '.card', function(){
            countryComponent.viewSelected(this.id)
        })
            
    },

    render: function () {
        this.fetchData().then((data)=>{
            var rendered = Mustache.render(this.$template, {
                flags : data
            });
            this.$target.html(rendered);
            countryComponent.render(this.CountriesData)
        })
    }
}

var countryComponent = {
    init : function(){
        this.cacheElements();
    },

    viewSelected : function(countryID){
        var selected = flagsComponent.CountriesData.filter((item) => item.cca2 == countryID)
        this.render(selected);
        newsComponent.fetchData(selected)
    },

    cacheElements: function () {
        this.$template = $('#country-template').html();
        this.$target = $('.sc-div')
    },

    render: function (selectedCountry) {
        var rendered = Mustache.render(this.$template, {
            country : selectedCountry[0]
        });
        this.$target.html(rendered);
    },

    // currencyFunc : function () {
    //     return function(val) {
    //         console.log(val)
    //       return Object.keys(val);
    //     };
    // }
}

var newsComponent = {
    countryNews : [],
    hasArticles : false,
    API_KEY : "b7bcd2c29efc43d68f9b6ae3a5c9b35a",

    init : function(){
        this.cacheElements();
    },

    fetchData : async function(country){
        await $.ajax(`https://newsapi.org/v2/top-headlines?country=${country[0].cca2.toLowerCase()}&apiKey=${this.API_KEY}`,   // request url
        {
            success: function (data) {
                if(data.articles.length > 0){
                    newsComponent.countryNews = data.articles
                    newsComponent.hasArticles = true
                }
                else{
                    alert("This country has no news to show")
                    newsComponent.hasArticles = false
                }
            }
        });
        
        if(this.hasArticles){
            this.render()
        }
        else{
            this.clearNews()
        }
    },

    cacheElements : function(){
        this.$template = $('#news-template').html();
        this.$target = $('.news-div')
    },

    render : function(){
        var rendered = Mustache.render(this.$template, {
            news : this.countryNews
        });
        this.$target.html(rendered);
    },

    clearNews : function(){
        this.$target.html("");
    }

}

flagsComponent.init();
countryComponent.init();
newsComponent.init();

