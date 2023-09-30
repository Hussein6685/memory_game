// select the start game button
document.querySelector(".control-buttons span").onclick = function () {
//    prompt window to ask for name
    let yourName = prompt("Whats Your Name?");
    // console.log(yourName);
    // if name is empty
    if (yourName == null || yourName == "") {
    //     set name to unknown
        document.querySelector(".name span").innerHTML = "Unknown";
    // name is not empty
    } else {
        //  set name to your name
        document.querySelector(".name span").innerHTML = yourName;

    }
    // remove splash screen
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blockContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blockContainer.children);

// let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

// add order css property to game blocks
blocks.forEach((block, index) => {
    // console.log(index)
    block.style.order = orderRange[index];


    // add click event
    block.addEventListener("click", function () {
        //  trigger the flip block function
        flipBlock(block);
    })

});

// flip block function
function flipBlock(selectedBlock) {
    //  add  class is flipped
    selectedBlock.classList.add("is-flipped");

    // collect all flipped cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"))

    // if theres two selected blocks
    if (allFlippedBlocks.length === 2) {
        console.log("two ");
    }

}


// shuffle function
function shuffle(array) {
    // setting vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        //  get random number
        random = Math.floor(Math.random() * current);

        // decrease length by one
        current--;
        // console.log(random);

        // [1] Save Current Element in Stash
        temp = array[current];

        // [2] Current Element = Random Element
        array[current] = array[random];

        //   [3] Random Element = Get Element From Stash
        array[random] = temp;
    }

    return array;
}

// Current Array [9, 2, 10, 4, 5, 6, 7, 3, 1, 8]
//  new Array[1, 0]
/*
  [1] Save Current Element in Stash
  [2] Current Element = Random Element
  [3] Random Element = Get Element From Stash
*/
