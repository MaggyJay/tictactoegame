let bloomIcon = document.getElementById("bloomicon");
let game = document.getElementById("main-windows-girlscout");
let ticTacIcon= document.getElementById("tictacicon");
let bloomTechForm= document.getElementById("bloom-tech-form");
let submitForm= document.getElementById("submitBtn");
let resultsDiv= document.getElementById("results-api");
const loader = document.querySelector("#loading");
// let clearResults = document.getElementById("resetBtn");

//show loading icon

// function displayLoading() {
//     loader.classList.add("display");
//     //stop loading results after time
//     setTimeout(() => {
//         loader.classList.remove("display");
//     }, 10000);
// }

//hiding loading
function hideLoading() {
    loader.classList.remove("display");
}

bloomicon.addEventListener("click", function () {
    
    bloomTechForm.style.display= "block";
    console.log("this worked");

    game.style.visibility= "hidden";
});

ticTacIcon.addEventListener("click", function () {

    console.log("this worked also!");
    bloomTechForm.style.display= "none";
    resultsDiv.style.display= "none";
    // game.style.display = "block";
    game.style.visibility= "visible";

})

submitForm.addEventListener("click", function () {
    bloomTechForm.style.display= "none";
    resetBtn.style.display= "block";

    loader.classList.add("display");
    // //stop loading results after time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 10000);


})

