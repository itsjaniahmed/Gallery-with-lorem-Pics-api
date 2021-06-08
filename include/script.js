fetch('https://picsum.photos/v2/list?page=2&limit=100')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});



function appendData(data) {

let mainContainer = document.getElementById("gallery");

for (let i = 1; i <= data.length; i++) {
    let div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML =
        '<div class="img-div"> <img loading="lazy" class="img" src="https://picsum.photos/id/' + data[i].id +'/400" alt="Image by '+data[i].author+'" > </div> <div class="img-details"><p class="author">' + data[i].author+ '</p><a target="_blank" href="' +
        data[i].download_url + '"><i class="fas fa-download" ></i></a></div>';

    mainContainer.appendChild(div);
}
}




window.onscroll = function () {
if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.querySelector(".header").style.background = "#232a34";
} else {
    document.querySelector(".header").style.background = "rgba(0, 0, 0, 0.267)";
}
};