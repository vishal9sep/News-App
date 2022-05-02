// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { apiCall, appendNews } from './fetch.js';

let query = localStorage.getItem("news");
let res = await apiCall(`https://masai-mock-api.herokuapp.com/news?q=twitter`);
console.log(res);
let results = document.getElementById("detailed_news");
appendNews(res, results);