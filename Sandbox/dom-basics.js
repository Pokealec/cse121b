const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image1 = document.createElement("img");
image1.setAttribute("src", "https://64.media.tumblr.com/aa65057a2ba418757cee5ae25c07d790/tumblr_pb2ky0qi6A1w6xh18o8_250.pnj");
image1.setAttribute("alt", "Description of image");
document.body.appendChild(image1);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const msg1 = document.createElement("section");
msg1.innerHTML = "<h2>CSE 121b</h2><p>Welcome to the Javascript Language!</p>";
document.body.appendChild(msg1);

