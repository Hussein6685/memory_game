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
console.log(orderRange[0]);
console.log(orderRange[1]);
console.log(orderRange[2]);
console.log(orderRange[3]);



// add order css property to game blocks
blocks.forEach((block, index) => {
    // console.log(index)
    block.style.order = index;
});
