async function randomUsersAPI() {
    let firstName = document.getElementById("first-Name").value;
    firstName= firstName.toLowerCase();

    const femaleGender = document.getElementById("femalegen").value;
    const maleGender = document.getElementById("malegen").value;
    const age = document.getElementById("user-age").value;
    let gender= document.getElementById("genders").value;
    const listUsers = [];

    // console.log(`My selected gender is ${gender}`);

    //i need a way for my code to figure out what all the genders are without me hardcoding them in. So I need a loop to go through the results and find the distinct gender object keys. 

    console.log(firstName);
    //But first need to connect to the API. 

 
    const endpoint = new URL(`https://randomuser.me/api/?gender=${ gender }&name=${ firstName }&age=${ age }&results=5000`)
    //realized i had to make results last


    // console.log(endpoint);
    // console.log(gender);
    // console.log(typeof firstName);

    // console.log(`I am this years many old ${age}`);

    // all the search fields that are defined
    let searchCritera;

    const response = await fetch(endpoint);


    // console.log(response);

    let data = await response.json();
    // console.log (data);
    let user= data.results;
    // console.log(`what is user ${user}`);
    // console.log(`what is maxage ${age}`);

    // console.log(`These are our users ${user}`);

    let div = document.getElementById("results-api");
    // let div2 = document.getElementById("results-api2");
   
    // document.getElementById('reesults-api').innerHTML = output;

    // console.log(`You're supposed to be the age? ${user.dob.age}`);

    // if (user.dob.age <= maxage){
    //     console.log(`I am less than ${maxage}`);
    // }
    // else {
    //     console.log(`You are not working.`);
    // }


// user.forEach(function (lists) {
//     div.innerHTML=  `
//     <div class="container">
//         <div class="card mt-4 bg-light">
//             <ul class="list-group">
//                 <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
//                 <li class="list-group-item"><img src="${lists.picture.large}"></li>
//                 <li class="list-group-item">Phone Number: ${lists.cell}</li>
//                 <li class="list-group-item">DOB: ${lists.dob.date}</li>
//                 <li class="list-group-item">Age: ${lists.dob.age}</li>
//                 <li class="list-group-item">Email ID: ${lists.email}</li>
//                 <li class="list-group-item">Gender: ${lists.gender}</li>
//                 <li class="list-group-item">City: ${lists.location.city}</li>
//                 <li class="list-group-item">Country: ${lists.location.country}</li>
//                 <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
//             </ul>

//         </div>
//     </div> `
// });

let resultsDiv= document.getElementById("results-api");

// function clearResults() {
//     resultsDiv.style.display= "none";
//     return;
// }

if (!firstName){
    alert("Please enter a first name");
}

user.forEach(function (lists) {
    // console.log(firstName);
    let usersName= lists.name.first.toLowerCase()
    // console.log(usersName);
    // console.log(lists.name.first);
    if (usersName == firstName && lists.dob.age <= age) {
    div.innerHTML=  `
    <div class="container">
        <div class="card mb-4">
        <div class ="card-header">
        <h4>Results</h4>
        </div>
            <ul class="list-group">
                <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                <li class="list-group-item"><img src="${lists.picture.large}"></li>
                <li class="list-group-item">Phone Number: ${lists.cell}</li>
                <li class="list-group-item">DOB: ${lists.dob.date}</li>
                <li class="list-group-item">Age: ${lists.dob.age}</li>
                <li class="list-group-item">Email ID: ${lists.email}</li>
                <li class="list-group-item">Gender: ${lists.gender}</li>
                <li class="list-group-item">City: ${lists.location.city}</li>
                <li class="list-group-item">Country: ${lists.location.country}</li>
                <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
            </ul>
            <button id="resetBtn" class = "btn btn-primary btn-block" onclick="clearResults()">Reset</button>
        </div>
    </div> `
    }
    // else{
    //     div.innerHTML = `
    //     <div class="container">
    //     <div class="card mt-4 bg-light">
    //         <h4>No Results</h4>
    //     </div> 
    // </div>`
    // }
});



// console.log("this is the name?" + data.results.name);
//  data.JSON.stringify(data);
// console.log(typeof data.results[0].name)

// let name = data.results[0].name;
//    name = JSON.stringify(name)
//    console.log(`this should be a string ${typeof name}`)
//    console.log(name);
//    name= name.split(":");
//    console.log(name);


    // console.log(data.results[0].name);
    // console.log(`what the fuck is ${JSON.stringify(user)}`);



}
