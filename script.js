//Hämta repos från mitt github

window.onload = getRepo();

function getRepo() {
    fetch("https://api.github.com/users/AntonSagi/repos")
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        appendData(data);
    })

    .catch(function (err) {
        console.log(err);
    })
}

function appendData(data) {
    var mainInfo = document.getElementById("portfolioID");

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("a");
        div.href = data[i].html_url;
        div.target = "_blank"
        div.innerHTML = data[i].name + "<br>";
        mainInfo.appendChild(div);
    }
}