//menu para mobile
var iconeMenu=document.getElementById('menu-icone');
var header=document.getElementById('cabeca');
//logo-interaçao
var logo=document.getElementById('logo-preto');
//monitor imagens
var monitor1=document.getElementById('slide-1');
var caixaDoSlide=document.getElementById('section-1');


//abrir menu
function abrirMenu(){
        iconeMenu.addEventListener('click',()=>{
        iconeMenu.style.transform='rotate(90deg)'
        iconeMenu.style.transition='250ms'
        header.classList.add("fechar-menu")
        header.classList.remove("fechar-menu")
        header.classList.add("adicionar-menu")
            fecharMenu()
    })

}abrirMenu()
//fechamento do menu
function fecharMenu(){
    iconeMenu.addEventListener('click',()=>{
        iconeMenu.style.transform='rotate(0deg)'
        iconeMenu.style.transition='250ms'
        header.classList.add("fechar-menu")
        abrirMenu()
})
}


//mundança de logo
function logoPreta(){
    logo.addEventListener('click',()=>{
        logo.setAttribute('src','imagens/logo-Nexis-01.png')
        logo.style.filter='drop-shadow(0px 0px 10px #00fffb)'
        logoBranca()
    })
}logoPreta()

function logoBranca(){
    logo.addEventListener('click',()=>{
        logo.setAttribute('src','imagens/logo-preto-1.png')
        logo.style.filter='drop-shadow(0px 0px 10px gray)'
        logoPreta()
    })
}

//slide de monitor inicio
