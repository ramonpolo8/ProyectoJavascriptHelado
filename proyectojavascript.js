/* Variables */
let roberto = prompt('Ingrese su dinero roberto:');
let pedro = prompt('Ingrese su dinero pedro:');
let cofla = prompt('Ingrese su dinero cofla:');

/* Precio productos */
let palitoagua = 0.70;
let palitocrema = 1.00;
let bombonheladix = 1.60;
let bombonheladovich = 1.70;
let bombonhelardo = 1.80;
let heladoconfites = 2.90;
let poteKG = 2.90;

/* Funcion */
if (roberto > bombonhelardo && roberto >= heladoconfites || roberto >= poteKG){
    document.write("Roberto puedes comprar Helado confite o pote KG con este dinero: " + roberto + " €");
} else if (roberto > bombonheladovich && roberto >= bombonhelardo ){
    document.write("Roberto puedes comprar bombon helardo con este dinero: " + roberto + " €");
} else if (roberto > bombonheladix && roberto >= bombonheladovich ){
    document.write("Roberto puedes comprar bombon heladovich con este dinero: " + roberto + " €");
} else if (roberto > palitocrema && roberto >= bombonheladix ){
    document.write("Roberto puedes comprar bombon heladix con este dinero: " + roberto + " €");
} else if (roberto > palitoagua && roberto >= palitocrema ){
    document.write("Roberto puedes comprar palito de crema con este dinero: " + roberto + " €");
} else if (roberto >= 0 && roberto >= palitoagua) { 
    document.write("Roberto puedes comprar palito de agua con este dinero: " + roberto + " €");
} else {
    document.write("nada")
}

if (pedro > bombonhelardo && pedro >= heladoconfites || pedro >= poteKG){
    document.write("Pedro puedes comprarte Helado confite o pote KG con este dinero: " + pedro + " €");
} else if (pedro > bombonheladovich && pedro >= bombonhelardo ){
    document.write("Pedro puedes comprarte Bombon Helardo con este dinero: " + pedro + " €");
} else if (pedro > bombonheladix && pedro >= bombonheladovich ){
    document.write("Pedro puedes comprarte bombon heladovich con este dinero: " + pedro + " €");
} else if (pedro > palitocrema && pedro >= bombonheladix ){
    document.write("Pedro puedes comprarte bombon heladix con este dinero: " + pedro + " €");
} else if (pedro > palitoagua && pedro >= palitocrema ){
    document.write("Pedro puedes comprarte palito de crema con este dinero: " + pedro + " €");
} else if (pedro >= 0 && pedro >= palitoagua) { 
    document.write("Pedro puedes comprarte palito de agua con este dinero: " + pedro + " €");
} else {
    document.write("nada")
}

if (cofla > bombonhelardo && cofla >= heladoconfites || cofla >= poteKG){
    document.write("Cofla puedes comprar Helado confite o pote KG con este dinero: " + cofla + " €");
    document.write("Esta es su vuelta: " + (cofla - (heladoconfites.toFixed(1))) + " €");
} else if (cofla > bombonheladovich && cofla >= bombonhelardo ){
    document.write("Cofla puedes comprar bombon helardo con este dinero: " + cofla + " €");
    document.write("Esta es su vuelta: " + (cofla - (bombonhelardo.toFixed(1))) + " €");
} else if (cofla > bombonheladix && cofla >= bombonheladovich ){
    document.write("Cofla puedes comprar bombon heladovich con este dinero: " + cofla + " €");
    document.write("Esta es su vuelta: " + (cofla - (heladoconfites.toFixed(1))) + " €");
} else if (cofla > palitocrema && cofla >= bombonheladix ){
    document.write("Cofla puedes comprar bombon heladix con este dinero: " + cofla + " €");
    document.write("Esta es su vuelta: " + (cofla - (bombonheladix.toFixed(1))) + " €");
} else if (cofla > palitoagua && cofla >= palitocrema ){
    document.write("Cofla puedes comprar palito de crema con este dinero: " + cofla + " €");
    document.write("Esta es su vuelta: " + (cofla - (palitocrema.toFixed(1))) + " €");
} else if (cofla >= 0 && cofla >= palitoagua) { 
    document.write("Cofla puedes comprar palito de agua con este dinero: " + cofla + " €");
    document.write("Esta es su vuelta: " + (cofla - (palitoagua.toFixed(1))) + " €");
} else {
    document.write("nada")
}
