let ulCanais = document.getElementById("ulCanais");
let ulCanaisFavoritos = document.getElementById("ulCanaisFavoritos");
let ulFilmes = document.getElementById("ulFilmes");
let linksAdicionados = [];
let imgAdicionadas = [];

let sobreCanais = [
    "Alura",
    "Curso em Video",
    "Rocketseat",
    "Filipe Deschamps",
    "Fabio Akita"
];

let linkCanais = [
    "https://youtube.com/c/Alura",
    "https://youtube.com/c/CursoemV%C3%ADdeo",
    "https://www.youtube.com/c/RocketSeat",
    "https://www.youtube.com/c/FilipeDeschamps",
    "https://www.youtube.com/c/FabioAkita1990"
];

let imgCanais = [
    //Alura
    "https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s88-c-k-c0x00ffffff-no-rj",
    //Curso em Video
    "https://yt3.ggpht.com/ytc/AKedOLRIYqffphLkoTlUA-hlcySXppGOpDgcAFjLaiB2gg=s88-c-k-c0x00ffffff-no-rj",
    //Rocketseat
    "https://yt3.ggpht.com/ytc/AKedOLQkXnYChXAHOeBQLzwhk1_BHYgUXs6ITQOakoeNoQ=s88-c-k-c0x00ffffff-no-rj",
    //Filipe Dechamps
    "https://yt3.ggpht.com/ytc/AKedOLTnTjoDN70zAxQqnSOBfj9RxVQ5H0HMZXciBQHY=s88-c-k-c0x00ffffff-no-rj",
    //Fabio Akita
    "https://yt3.ggpht.com/ytc/AKedOLSt8q-3u78Uk5LjZtGN6liv-FIoSs6NuV7_XT1q-mQ=s88-c-k-c0x00ffffff-no-rj"
];

let sobreFavoritos = [
    "Brasil Paralelo",
    "Anderson Dick",
    "Fernando Ulrich",
    "throtl",
    "Sobrevivencialismo"

];

let linkFavoritos = [
    "https://www.youtube.com/c/BrasilParaleloOficial",
    "https://www.youtube.com/c/AndersonDick",
    "https://www.youtube.com/channel/UCLJkh3QjHsLtK0LZFd28oGg", // Fernando Ulrich
    "https://www.youtube.com/c/Throtl",
    "https://www.youtube.com/c/Sobrevivencialismo"

];

let imgFavoritos = [
    // Brasil Paralelo
    "https://yt3.ggpht.com/l89nOUZ6sATDb_XKIxFION2n5tUdkaPocxks-xFg0UWunIuEvfqfjdwi1zlVbmLmyEhhBrLx=s88-c-k-c0x00ffffff-no-rj",
    // Anderson Dick
    "https://yt3.ggpht.com/uedhJhoQtcN_6jHOgg_ODBVMBeTZIHxcNke6JKohIz_PXismVxJ9yg2pmREilzS23l5ujyOH=s88-c-k-c0x00ffffff-no-rj",
    // Fernando Ulrich
    "https://yt3.ggpht.com/ytc/AKedOLRBz6l7CAIWnhxUFPi22NGxzwmzXVwDN7sxauZ3=s88-c-k-c0x00ffffff-no-rj",
    // Throtl
    "https://yt3.ggpht.com/ytc/AKedOLRKv0dhlyuGcJFY2_QOJqgEBxFT_67qaOrpg5YPqQ=s88-c-k-c0x00ffffff-no-rj",
    // Sobrevivencialismo
    "https://yt3.ggpht.com/ytc/AKedOLQEAUWfiWSmea5qsWJ9o2UK8v4PbmB-NijPY5RCLw=s88-c-k-c0x00ffffff-no-rj"

];

let sobreFilmes = [
    "The Godfather",
    "Seven",
    "Leon: The Professional"
];

let linkFilmes = [
    "https://www.youtube.com/watch?v=UaVTIH8mujA", // The Godfather >> link trailer
    "https://www.youtube.com/watch?v=znmZoVkCjpI",
    "https://www.youtube.com/watch?v=aNQqoExfQsg"
];

let imgFilmes = [
    "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/1/518020201013-uau-posters-filmes-mafia-the-godfather-o-poderoso-chefao.jpg", // The Godfather
    "https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg", // Seven

    "http://cinetop.com.br/wp-content/uploads/2019/09/MV5BMTc3Mzg0NDE0MV5BMl5BanBnXkFtZTgwNzQ1MzgyMjI@._V1_.jpg" // Leon
];

for (var i = 0; i < linkCanais.length; i++) {
    ulCanais.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkCanais[i]}" target="_blank"><img src="${imgCanais[i]}" ></a><label>${sobreCanais[i]}</label></li>`;
}

for (i = 0; i < linkFavoritos.length; i++) {
    ulCanaisFavoritos.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkFavoritos[i]}" target="_blank"><img src="${imgFavoritos[i]}"></a><label>${sobreFavoritos[i]}</label></li>`;
}

for (i = 0; i < linkFilmes.length; i++) {
    ulFilmes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkFilmes[i]}" target="_blank"><img src="${imgFilmes[i]}"></a><label>${sobreFilmes[i]}</label></li>`;
}

function adicionar() {
    var nome = document.getElementById("nome");
    var url = document.getElementById("url");
    var imagem = document.getElementById("imagem");
    var categoria = document.getElementById("opcoesCategoria").value;

    if (nome.value != "" && url.value != "" && imagem.value != "") {
        //Verifica se já existe a url/imagem
        if (
            linksAdicionados.indexOf(url.value) == -1 &&
            imgAdicionadas.indexOf(imagem.value) == -1
        ) {
            var elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDeletar" onclick="deletar()"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button><a href="${url.value}" target="_blank"><img src="${imagem.value}" onerror="removerImagem()"></a><label>${nome.value}</label></li>`;
            switch (categoria) {
                case "ulCanais":
                    ulCanais.innerHTML += elemento;
                    break;
                case "ulCiencias":
                    ulCanaisFavoritos.innerHTML += elemento;
                    break;
                case "ulFilmes":
                    ulFilmes.innerHTML += elemento;
            }
            linksAdicionados.push(url.value);
            imgAdicionadas.push(imagem.value);
        } else {
            alert("Esta url/imagem já existe");
        }
    } else {
        alert("Preencha todos os campos!");
    }
    nome.value = "";
    url.value = "";
    imagem.value = "";
}

function deletar() {
    //Remove o canal/filme
    var target = event.currentTarget;
    var li = target.parentElement;
    var ul = li.parentElement;
    var url = li.children[1].href;
    var img = li.children[1].firstChild.src;
    linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
    imgAdicionadas.splice(imgAdicionadas.indexOf(img), 1);
    ul.removeChild(li);
}

function removerImagem() {
    //Remove o canal/filme se a imagem não for valida
    var ul = event.currentTarget.parentElement.parentElement.parentElement;
    var li = event.currentTarget.parentElement.parentElement;
    ul.removeChild(li);

    linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
    imgAdicionadas.splice(imgAdicionadas.indexOf(imagem), 1);
    alert("Coloque uma imagem válida!");
}

function mostrarTexto() {
    var target = event.currentTarget;
    target.lastChild.style.opacity = "1";
    if (target.firstChild.id == "btnDeletar") {
        target.firstChild.style.opacity = "1";
    }
}

function ocultarTexto() {
    var target = event.currentTarget;
    target.lastChild.style.opacity = "0";
    if (target.firstChild.id == "btnDeletar") {
        target.firstChild.style.opacity = "0";
    }
}