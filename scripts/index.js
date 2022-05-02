// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { apiCall, appendNews } from './fetch.js';

// let query = document.getElementById("search_input").value;
let res = await apiCall(`https://masai-mock-api.herokuapp.com/news?q=tesla`);
// console.log(res);

let results = document.getElementById("results");
appendNews(res, results);

let search = document.getElementById("search_input");
search.addEventListener("keypress",getNews)

function getNews(e) {
    if (e.code == "Enter") {
        let query = search.value;
        localStorage.setItem("news", query);
        window.location.href = "search.html";
    }
}
getNews(event);