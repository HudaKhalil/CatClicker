// Clicked Animals
var animalStruct = {
    currentAnimal: null,
    animals: [
      {
        clickCount : 0,
        name : 'Yawning Kitten',
        imgSrc : 'images/kitten.jpg',
        imgAttribution : 'https://www.pinterest.com/pin/168885054753742314/?lp=true'
      },
      {
        clickCount : 0,
        name: 'Cute Puppy',
        imgSrc: 'images/puppy.jpg',
        imgAttribution : 'https://www.gettyimages.com/detail/photo/golden-retriever-puppy-portrait-royalty-free-image/512366437'
      },
      {
        clickCount : 0,
        name: 'Cute Parrots',
        imgSrc: 'images/parrots.jpg',
        imgAttribution: 'https://imgur.com/gallery/ydq0f'
      }
    ]
}

// Initialization
var InitTree = {

    init: function() {
        // set our current animal to the first one in the list
        animalStruct.currentAnimal = animalStruct.animals[0];

        // tell our views to initialize
        animalListView.init();
        animalView.init();
    },

    getCurrentAnimal: function() {
        return animalStruct.currentAnimal;
    },

    getAnimals: function() {
        return animalStruct.animals;
    },

    // set the currently-selected animal to the object passed in
    setCurrentAnimal: function(animal) {
        animalStruct.currentAnimal = animal;
    },

    // increments the counter for the currently-selected animal
    incrementCounter: function() {
        animalStruct.currentAnimal.clickCount++;
        animalView.render();
    }
};
