var headeri = document.createElement("header");
headeri.className = "ylatunniste";
document.getElementsByTagName("body")[0].appendChild(headeri);
document.getElementsByClassName("ylatunniste")[0].style.border = "dotted 1px";
document.getElementsByClassName("ylatunniste")[0].style.padding = "1rem";
document.getElementsByTagName("body")[0].style.padding = "0.5rem";
document.getElementsByTagName("body")[0].style.fontFamily = "Gill Sans, sans-serif";
var otsikko = document.createElement("h1");
var node = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(node);
document.getElementsByClassName("ylatunniste")[0].appendChild(otsikko);
document.getElementsByTagName("h1")[0].style.fontWeight = "900";
document.getElementsByTagName("h1")[0].style.paddingBottom = "0.7rem";

var para = document.createElement("p");
var node = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sit laudantium, consequuntur unde nisi nihil molestiae reiciendis repudiandae incidunt, eius eveniet debitis ipsa? Adipisci, cupiditate dolore quasi cum ad temporibus.");
para.appendChild(node);
document.getElementsByClassName("ylatunniste")[0].appendChild(para);

var sectioni = document.createElement("section");
sectioni.id = "rinnakkain";
document.getElementsByTagName("body")[0].appendChild(sectioni);
document.getElementById("rinnakkain").style.border = "dotted 1px";
document.getElementById("rinnakkain").style.padding = "1rem";
var para = document.createElement("p");
var node = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sit laudantium, consequuntur unde nisi nihil molestiae reiciendis repudiandae incidunt, eius eveniet debitis ipsa? Adipisci, cupiditate dolore quasi cum ad temporibus.sicing elit. Minus sit laudantium, consequuntur unde nisi nihil molestiae reiciendis repudiandae incidunt, eius eveniet debitis ipsa? Adipisci, cupiditate dolore quasi cum ad temporibus");
para.appendChild(node);
document.getElementById("rinnakkain").appendChild(para);
var figure = document.createElement("figure");
figure.id = "kuvanpaikka";
document.getElementById("rinnakkain").appendChild(figure);
document.getElementById("kuvanpaikka").style.margin = "1rem";

var img = document.createElement("img");
img.src = "./images/introduction-to-javascript.png";
var src = document.getElementById("kuvanpaikka");
src.appendChild(img);

var footer = document.createElement("footer");
document.getElementsByTagName("body")[0].appendChild(footer);
document.getElementsByTagName("footer")[0].style.border = "dotted 1px";

var para = document.createElement("p");
var node = document.createTextNode("2021 @ Ahlem Mhadhbi");
para.appendChild(node);
document.getElementsByTagName("footer")[0].appendChild(para);
document.getElementsByTagName("footer")[0].style.padding = "0.7rem";