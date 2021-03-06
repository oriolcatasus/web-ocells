'use strict';

$(init());

async function init() {
    let birds = await getAllBirds();
    const params = new URLSearchParams(window.location.search);
    if (params.has('query')) {
        const query = normalizeStr(params.get('query'));
        birds = birds.filter(bird => normalizeStr(bird.name).includes(query));
    }
    birds.sort((bird1, bird2) => {
        const [fav1, fav2] = [localStorage.getItem(bird1.id), localStorage.getItem(bird2.id)];
        if (fav1 && fav2 || !fav1 && !fav2) {
            return normalizeStr(bird1.name) > normalizeStr(bird2.name) ? 1 : -1;
        }
        return fav1 ? -1 : 1;
    });
    if (birds.length) {
        generateBirdCards(birds);
    } else {
        birdsNotFoundMessage();
    }    
}

function generateBirdCards(birds) {
    birds.forEach(bird => {
        const heartType = localStorage.getItem(bird.id) ? 'fas' : 'far';
        $(`<div class="card">
            <img src="${bird.image}" alt="${bird.name}" class="card-img-top h-100">
            <button type="button" class="btn btn-light position-absolute top-0 end-0 m-1" onclick="heartButton('${bird.id}')">
                <i class="${heartType} fa-heart fa-lg text-danger"></i>
            </button>
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${bird.name}</h5>
                <h6 class="card-subtitle mb-3 text-muted d-flex justify-content-between">
                    <i>${bird.scientificName}</i>
                    <a href="${bird.wiki}" target="blank" rel="noopener noreferrer">
                        <i class="fab fa-wikipedia-w fa-lg"></i>
                    </a>
                </h6>
                <audio class="rounded w-100" controls loop>
                    <source src="${bird.sound}" type="audio/mpeg">
                </audio>
            </div>
        </div>`).appendTo('#card-container');
    });
}

function birdsNotFoundMessage() {
    $(`<div class="d-flex flex-column align-items-center gap-4">
        <i class="far fa-sad-tear fa-7x text-secondary"></i>
        <p class="text-center fs-2">No s'ha trobat cap ocell que coincideixi amb els criteris de cerca</p>
    </div>`).appendTo('#card-container');
}

function heartButton(id) {
    if (localStorage.getItem(id)) {
        localStorage.removeItem(id);
    } else {
        localStorage.setItem(id, 'favourite');
    }
    $('#card-container').empty();
    init();
}
