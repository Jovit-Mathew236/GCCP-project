const form = document.querySelector("#uploadForm");
const responseDiv = document.querySelector("#response");

const predictFunction = (event) => {
    event.preventDefault();

    const fileInput = document.querySelector("#fileInput");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch("https://getprediction-gzrkj7ydfa-uc.a.run.app", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            responseDiv.innerHTML =
                "The predicted number is " + JSON.stringify(data).slice(14, 15);
        });
}

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const fileInput = document.querySelector("#fileInput");
//     const file = fileInput.files[0];
//     const formData = new FormData();
//     formData.append("file", file);

//     fetch("https://getprediction-gzrkj7ydfa-uc.a.run.app", {
//         method: "POST",
//         body: formData,
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             responseDiv.innerHTML =
//                 "The predicted number is " + JSON.stringify(data).slice(14, 15);
//         });
// });