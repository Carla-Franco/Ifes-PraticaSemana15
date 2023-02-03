var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

var select = document.getElementById('select_animais');
var container = document.getElementById('container');
var nome = document.getElementById('nome');

select.addEventListener('input', listarAnimais);
container.addEventListener('mouseover', mostrarNome);
container.addEventListener('mouseout', limparNome);

function listarAnimais() {
    limparDivContainer();
    var option = select.value;
    var animais;

    if(option === "dog") {
        animais = cachorros;
    } else if (option === "cat") {
        animais = gatos;
    }

    animais.forEach(function(animal) {
        var img = document.createElement("img");
        img.src = "./img/" + animal.imagem + ".jpg";
        img.setAttribute("data-nome", animal.nome);
        container.appendChild(img);
    });
}

function mostrarNome(e) {
    var elemento = e.target;
    if(elemento.tagName === "IMG") {
        nome.innerText = elemento.getAttribute("data-nome");
    }
}

function limparNome() {
    nome.innerText = "";
}

function limparDivContainer() {
    var elemento = document.querySelector("#container");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}