$('.owl-carousel').owlCarousel({
    loop:true, //define que os banners vão rolar em loop
    margin:10, // margem para separar cada banner
    nav:false, // navegação do carousel
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})