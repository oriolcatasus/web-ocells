'use strict';

$(async function() {
    const birds = await getAllBirds();
    birds.sort((bird1, bird2) => normalizeStr(bird1.name) > normalizeStr(bird2.name));
    generateCards(birds);
});
