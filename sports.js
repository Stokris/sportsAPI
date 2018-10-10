const baseURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal";
const key = "1";
let url;


const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');


const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);


function fetchResults(e) {
    e.preventDefault();
   // url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
   url = baseURL;
    console.log("URL:", url);

    fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {
    console.log(json);
}









nav.style.display = 'none';

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
};

const section = document.querySelector('section');











//             article.appendChild(heading);
//             heading.appendChild(link);
//             article.appendChild(img);
//             article.appendChild(para);
//             article.appendChild(clearfix);
//             section.appendChild(article);
            
//         }
//     }

//     if(articles.length === 10) {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none';
//     }
// };

// nav.style.display = 'none';

// function nextPage(e) {
//     pageNumber++;
//     fetchResults(e);
//     console.log("Page number:", pageNumber);
// }

// function previousPage(e) {
//     if(pageNumber > 0) {
//         pageNumber--;
//     } else {
//         return;
//     }
//     fetchResults(e);
//     console.log("Page:", pageNumber);
// };

// const section = document.querySelector('section');