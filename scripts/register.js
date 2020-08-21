
function Person(name, surname, email, password) {
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.password = password
    
}


document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("register_btn").addEventListener("click", function () {

        let person_name = document.getElementById("name_inp").value;
        let person_surname = document.getElementById("surname_inp").value;
        let person_email = document.getElementById("email_inp").value;
        let person_password = document.getElementById("password_inp").value;

        let person = new Person(person_name, person_surname, person_email, person_password);
        if (localStorage.database) {
            let users = JSON.parse(localStorage.database);

            if (users.length) {
                users.push(person);
                localStorage.database = JSON.stringify(users);

            }
            else{
                let users_array = [];
                users_array.push(users);
                users_array.push(person);
                localStorage.database = JSON.stringify(users_array);
            }
        }
        else{
            localStorage.database = JSON.stringify(person);
        }
    });
});