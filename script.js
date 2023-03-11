fetch("https://upadhayay.github.io/db.json")
.then(function (response) {
    return response.json();
})
.then(function (db) {
    let placeholder = document.getElementById("repub");
    let out = "";
    for (let i = 0; i < db.books.length; i++) {
        out += `
        <div class="research">
            <img width=250px height=250px src="dump/profilepic.jpeg" alt="prf">
            <h2>Publication : ${db.books[i].title} [${db.books[i].year}]</h2>
            <a href="#" class="read">read more</a>
        </div>
                `;
    }
    
    placeholder.innerHTML = out;
});
