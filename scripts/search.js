// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { apiCall, appendNews } from './fetch.js';

let query = localStorage.getItem("news");
let res = await apiCall(`https://masai-mock-api.herokuapp.com/news?q=twitter`);
console.log(res);
let results = document.getElementById("results");
appendNews(res, results);