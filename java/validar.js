export { validar };

dades_login={
  "login":[
    {"email":"vicent@gmail.com","password":"123","nom":"vicent"},
    {"email":"alex@gmail.com","password":"123","nom":"alex"},
    {"email":"sergi@gmail.com","password":"123","nom":"sergi"}
    {"email":"1@g","password":"1","nom":"aa"}
  ]
}

//Funcions
async function validar(){
  //let arrays = await datospueblos();
  console.log("llamo a validar")
  let login= arrays.login;

    let email = document.querySelector("#inputEmail").value;
    let con = document.querySelector("#inputPassword").value;

    if(email == login[0].email && con == login[0].password || email == login[1].email && con == login[1].password || email == login[2].email && con == login[2].password  ){
        //main();
        console.log("contraseña correcta");
    }else{
    alert(`contraseña incorrecta.`);
    console.log("contraseña incorrecta");
    }

}
