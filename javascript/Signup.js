let firstName = document.getElementById("name");
let lastName = document.getElementById("surname");
let emailAdress = document.getElementById("email");
let passWord = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let signUp = document.getElementById("register-btn;");

signUp.addEventListener("click", welcomeUser);

function welcomeUser(){

    if(firstName.value === "" || lastName.value === "" || emailAdress.value === "" || passWord.value === "" || confirmPassword.value === ""){
        alert("Please fill in missing information!!!");
    }
    else{
        if(passWord.value != confirmPassword.value){
            alert("Passwords do not match!!!");
        }
        else{
            
            /* var mssql = require('mssql');
            alert("connecting...");
            
            var connection = mssql.createConnection({
                host:'MM0022674\SQLEXPRESS',
                user:'MASSMART_\luyanda.mgabhi',
                password:'',
                database:'EduGuide360'
            });
            
            connection.connect(function(err){
                if(err) throw err;
                alert("Connected");

                var sql = "INSERT INTO learner (name, surname, email, password) VALUES ?";
                var values = [[firstName.value,lastName.value,emailAdress.value,passWord.value]];
            })

            connection.query(sql,[values], function(err, results){
                if(err) throw err;
                alert("recor ds inserted: "+ results.affectedRows);
            })*/

            alert("Welcome "+firstName.value + " "+ lastName.value);
            window.location.href = "../html/Pastpapers.html";
        }
    }
};