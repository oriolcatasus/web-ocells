'use strict';

const numSlides = 6;

$(async function() {
    const birds = await getAllBirds();
    const randNums = getNrandomNumbers(numSlides, birds.length);
    randNums.forEach((num, i) => {
        const bird = birds[num];
        $(`<li data-bs-target="#carousel-birds" data-bs-slide-to="${i+1}">`).appendTo('.carousel-indicators');
        $(`<div class="carousel-item">
            <img src="${bird.image}" alt="${bird.name}" class="d-block w-100">
            <div class="carousel-caption">
                <h5>${bird.name}</h5>
                <p><i>${bird.scientificName}</i></p>
            </div>
        </div>`).appendTo('.carousel-inner');
    });
    $('.carousel-indicators > li:first-child').addClass('active');
    $('.carousel-inner > div:first-child').addClass('active');
});
