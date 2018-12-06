const baseURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php";
const key = "4012948";
let url;


const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');


// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');
let pageNumber = 0;
//console.log('PageNumber:', pageNumber);
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);


function fetchResults(e) {
    e.preventDefault();
     url = `${baseURL}?t=${searchTerm.value.split(" ").join("_")}`;
    // url = baseURL + `${searchTerm.value}`;
    console.log(url)

    fetch(url)
    .then(function(result) {
        console.log(result);
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let team = json.teams;

    if (team.length === 0) {
        console.log("No Results");
    } else {
        let team = json.teams[0];
        //console.log(team.strStadiumDescription);
        // for (let i = 0; i < team.length; i++) {
            let manager = document.createElement('h2');
            manager.innerText = team.strManager;
            console.log(team);

            let stadium = document.createElement('p');
            stadium.innerText = team.strStadium;
            console.log(team);

            let stadiumDescription = document.createElement('p');
            stadiumDescription.innerText = team.strStadiumDescription;
            console.log(team);







            // let para = document.createElement('p')
             let dunk = document.createElement('div');
            // let link = document.createElement('a');
            


            dunk.appendChild(manager);
            // article.appendChild(strStadium);
            // article.appendChild(strStadiumDescription);
            // article.appendChild(para);
            section.appendChild(stadium);
            section.appendChild(stadiumDescription);
        }
    }