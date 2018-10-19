
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
//1
var cont = 1;
//2
var bitacoras = [];
//3
var formulario = document.getElementById("bitacora");
//4
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    if (validado()) {
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }
});
//5
const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}
//6
const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
//7
const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}
//8
const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

//VALIDACION
function validado() {
    var x = formulario[1].value;
    var y = formulario[2].value;
    var z = formulario[3].value;
    if (x == "" || y == "" || z == "") {
        if(x==""){
            formulario[1].style.border = "solid 2px red";
        }
        if(x!=""){
            formulario[1].style.border = "solid 2px green";
        }
        if(y==""){
            formulario[2].style.border = "solid 2px red";
        }
        if(y!=""){
            formulario[2].style.border = "solid 2px green";
        }
        if(z==""){
            formulario[3].style.border = "solid 2px red";
        }
        if(z!=""){
            formulario[3].style.border = "solid 2px green";
        }
        return false;
    }
    formulario[1].style.border = "solid 1px gray";
    formulario[2].style.border = "solid 1px gray";
    formulario[3].style.border = "solid 1px gray";
    return true;
}