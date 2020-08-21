document.addEventListener("DOMContentLoaded", function(){


    document. getElementById("btn_login").addEventListener("click" , function(e){
       e.preventDefault();
       let email = document.getElementById("EmailInput").value;
       let password = document.getElementById("PasswordInput").value;

       let users = JSON.parse(localStorage.database);

        let foundUser = false;
   if (users.length) {
       for (let user of users) {
           if (email == user.email && password == user.password) {
               foundUser = true;
               localStorage.setItem("user", JSON.stringify(user));
               break;
           }
       }
   }
   else{
       if (email == users.email && password == users.password) {
           foundUser = true;
           localStorage.setItem("user", JSON.stringify(users));
           break;
       }
   } 
       if (foundUser) {
           document.location.href = "profile.html";
       }
       else{
           alert("Your inputs are wrong!");
       }
   
    });
});