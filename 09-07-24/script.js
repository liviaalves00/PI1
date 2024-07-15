document.addEventListener("DOMContentLoaded", function () {
  var p1 = document.getElementById("texto");
  p1.innerHTML = "Hello World!";

  document.getElementById("btnCopiar").addEventListener("click", copiar);
  copy();
});

document.addEventListener("DOMContentLoaded", function () {
  var paragrafos = document.getElementsByTagName("p");
  Array.from(paragrafos).forEach((p) => {
    if (p.id !== "texto") p.innerHTML = "World Hello!!!";
  });
});

function helloWorld() {
  alert("Hello World");
}

function copiar() {
  let texto = document.getElementById("caixaTexto").value;
  document.getElementById("resultado2").innerHTML += texto + "<br>";
}

function copy() {
  var btn = document.getElementById("btn");
  var src = document.getElementById("src");
  var out = document.getElementById("out");
  btn.addEventListener("click", () => {
    out.innerHTML += src.value.toUpperCase() + "<br>";
  });
}

function calculator() {}
