'use strict';

const numSlides = 6;

$(async function() {
    const birds = await getAllBirds();
    const randNums = getNrandomNumbers(numSlides, birds.length);
    const indicatorContainer = $('.carousel-indicators');
    const indicator = $('<li data-bs-target="#carousel-birds">');
    const itemContainer = $('.carousel-inner');
    const item = $('<div class="carousel-item">');
    const img = $('<img class="d-block w-100">');
    item.append(img);
    const caption = $('<div class="carousel-caption">');
    item.append(caption);
    const title = $('<h5>');
    caption.append(title);
    const subtitle = $('<i>');
    caption.append($('<p>').append(subtitle));
    randNums.forEach((num, i) => {
        const bird = birds[num];
        indicator.attr('data-bs-slide-to', i+1);
        indicatorContainer.append(indicator.clone());
        img.attr('src', bird.image);
        img.attr('alt', bird.name);
        title.text(bird.name);
        subtitle.text(bird.scientificName);
        itemContainer.append(item.clone());
    });
    indicatorContainer.children().first().addClass('active');
    itemContainer.children().first().addClass('active');
});
