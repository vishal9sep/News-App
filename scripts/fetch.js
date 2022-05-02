async function apiCall(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

let arr = JSON.parse(localStorage.getItem("news")) || [];

function appendNews(data, results) {
    results.innerHTML = "";
    // console.log(news)
    data.map((el) => {
        let box = document.createElement("div");
        // box.setAttribute("class", "news");
        console.log(el.articles);
        
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let title = document.createElement('h3');
        title.innerText = el.title;

        let cont = document.createElement('p');
        cont.innerText = el.content;
        
        box.append(img,title,cont);
        results.append(box);
    });
}

export { apiCall, appendNews };