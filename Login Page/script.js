let username = document.getElementById("login_1");
let password = document.getElementById("login_2");
let submit = document.getElementById("sbt");

 submit.addEventListener("click", ()=>{
    const userN = username.value;
    const userP = password.value;
    console.log(userN);
    console.log(userP);
 })
 
