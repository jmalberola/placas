import { validar } from "./java/validar.js";


//Cookies i LocalStorage
//Classes
class Galletes {
 static setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

static getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

 checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
}

//Dataset


let chartData = {

  labels: [
      "Produit",
      "Perdut",
      "Consumit",

  ],
  datasets: [
      {
          data: [4.8,0.5,3.2,],
          backgroundColor: [
              "#63FF84",
              "#FFFF00",
              "#FF6384"

          ],
          borderColor: "black",
          borderWidth: 1
      }]
};

//Classes
class ChartMaker{

  static doughnutChart(data){

    let node = document.querySelector("#OverviewChart");
    let options = {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -Math.PI,
      cutoutPercentage: 30,
      circumference: Math.PI,
      legend: {
        position: 'bottom'
      },
      animation: {
        animateRotate: true,
        animateScale: false
      }
    };

    let myDoughnutChart = new Chart(node, {
      type: 'doughnut',
      data: data,
      options: options
  });
  }
}


//Fuction json
async function datospueblos(){
    let array= {}
    await fetch('./java/datos.json')
    .then(response => response.json())
    .then(dato=> array = dato )

    return array;
}

/*********************vistes***********************/
//Funcions
function login(){
    document.title= "Login";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`

<form class="form-signin">

    <div class="pag">


      <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsH_SP1Z0sGr5k1dnAxDRB3sVEb8-4dXHDRw&usqp=CAU" alt="" width="72" height="72">
        <div class="container">
      <h1 class="titulop">Please sign in</h1>

      <label for="inputEmail" class="sr-only">Email address</label>

      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>

      <br>

      <label for="inputPassword" class="sr-only">Password</label>

      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <div class="checkbox mb-3">
        <br>
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
      </div>



      <p class="fecha">&copy; 2020-2021</p>

</form>`

    let boto= document.querySelector(".btn");
    boto.addEventListener('click',validar.then(
      console.log("açò s'executa després de la promesa")
    ).catch(
      consolo.log("açò s'executa si hi ha hagut algun error en la promesa")
    ));
}
//Funcions
async function estadistica(){
    console.log("dins de estadistica")
    let arrays = await datospueblos();
    let datosdias= arrays.arraydias;
    document.title= "Estadistica";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
<nav class="navbar fixed-top navbar-dark bg-dark">
<a class="navbar-brand" href="#">Pagina principal</a>
</nav>

<div class="cabecera">



</div>
<div class="pag2">

<div class="div1">
    <h1 class="titulop">Dilluns</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[0].Obtingut+`%">
    Obtingut `+datosdias[0].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[0].perdut+`%">
    Perdut `+datosdias[0].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[0].Gastat+`%">
    Gastat `+datosdias[0].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div2">
    <h1 class="titulop">Dimarts</h1>
 <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[1].Obtingut+`%">
    Obtingut `+datosdias[1].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[1].perdut+`%">
    Perdut `+datosdias[1].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[1].Gastat+`%">
    Consumit `+datosdias[1].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div3">
    <h1 class="titulop">Dimecres</h1>
    <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[2].Obtingut+`%">
    Obtingut `+datosdias[2].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[2].perdut+`%">
    Perdut `+datosdias[2].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[2].Gastat+`%">
    Consumit `+datosdias[2].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div4">
    <h1 class="titulop">Dijous</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[3].Obtingut+`%">
    Obtingut `+datosdias[3].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[3].perdut+`%">
    Perdut `+datosdias[3].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[3].Gastat+`%">
    Consumit `+datosdias[3].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div5">
    <h1 class="titulop">Divendres</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[4].Obtingut+`%">
    Obtingut `+datosdias[4].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[4].perdut+`%">
    Perdut `+datosdias[4].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[4].Gastat+`%">
    Consumit `+datosdias[4].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div6">
    <h1 class="titulop">Disabte</h1>
   <div class="container p-3">
 <div class="progress" >

<div class="progress-bar bg-success" style="width:`+datosdias[5].Obtingut+`%">
    Obtingut `+datosdias[5].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[5].perdut+`%">
    Perdut `+datosdias[5].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[5].Gastat+`%">
    Consumit `+datosdias[5].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div7">
    <h1 class="titulop">Diumenge</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[6].Obtingut+`%">
    Obtingut `+datosdias[6].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[6].perdut+`%">
    Perdut `+datosdias[6].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[6].Gastat+`%">
    Consumit `+datosdias[6].Gastat+`%
  </div>

  </div>
</div>
</div>

</div>
<div class="pie">



</div>
`
    let boto2= document.querySelector(".navbar-brand");
    boto2.addEventListener('click',main);
}

async function datosUsuario(){

  let arrays = await datospueblos();
  let login= arrays.login;
  document.title= "Datos usuario";
  let contenedor= document.querySelector(".divprincipal");
  contenedor.innerHTML=`
<nav class="navbar fixed-top navbar-dark bg-dark">
<a class="navbar-brand" href="#">Pagina principal</a>
</nav>

<div class="cabecera">

<p class="parrafocabecera">Datos Usuario</p>

</div>
<div class="pag">

<div class="container">
  <h1 class="titulop">Datos Usario</h1>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Nombre/th>
        <th>Email</th>
        <th>Contraseña</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>`+login[0].nom+`</td>
        <td>`+login[0].email+`</td>
        <td>`+login[0].password+` </td>
      </tr>

    </tbody>
  </table>
</div>
<br>

</div>
`
let boto2= document.querySelector(".navbar-brand");
boto2.addEventListener('click',main);

}

//Funcions
function main(){
    document.title= "Pag Principal";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
<nav class="navbar fixed-top navbar-dark bg-dark">
<a class="navbar-brand" href="#">Inicio Sesion</a>
<a class="navbar-brand" id="estadistica" href="#">Estadística Semanal</a>
<a class="navbar-brand" id="datosusuario" href="#">Datos Usuario</a>

</nav>

<div class="cabecera">

<p class="parrafocabecera">Treball Final Vicent</p>

</div>
<div class="pag">



<h1 class="titulop">Mitja general</h1>

<canvas id="OverviewChart"></canvas>
</div>
<div class="pie">

<p class="parrafopie">Treball Final Vicent</p>

</div>
`

    ChartMaker.doughnutChart(chartData);
    let boto2= document.querySelector(".navbar-brand");
    boto2.addEventListener('click',login);

    let boto3= document.querySelector("#estadistica");
    boto3.addEventListener('click',estadistica.then(
      console.log("quan acaba la promesa");
    ).catch(
      console.log("si dona error la promesa")
    ));

    let boto4= document.querySelector("#datosusuario");
    boto4.addEventListener('click',datosUsuario);
}

//Funcions
(function () {
"use strict"

 document.addEventListener("DOMContentLoaded", function () {

         main();

});
})();
