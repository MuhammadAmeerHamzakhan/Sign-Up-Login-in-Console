function SignUp(){
    alert("You Are Signup Successfully")
    var Name=document.getElementById("name").value
    console.log(Name)
    var Contact=document.getElementById("contact").value
    console.log(Contact)
    var Email=document.getElementById("email").value
    console.log(Email)
    var Password=document.getElementById("password").value
    console.log(Password)

    let alluserdata = [];

    var userdata= {
       name :Name,
       contact:Contact,
       email: Email,
       password: Password,
    }
    console.log(userdata)
    
    alluserdata.push(userdata)
   let jsonData = JSON.stringify(alluserdata);
    localStorage.setItem('alluserdata', jsonData);
    console.log(alluserdata)

}


// let usersArray = [

// ];
// var userEmail = prompt("enter user email");
// var userPassword = prompt("enter user email");
// function signUp() {

//     let obj = {
//         email: userEmail,
//         password: userPassword
//     }

//     let allusers = localStorage.getItem('allusers');
//     console.log(allusers)
//     if (allusers === null) {
//         allusers = []
//     } else {
//         allusers = JSON.parse(allusers)
//     }
//     allusers.push(obj)
//     console.log(allusers)
//     let jsonData = JSON.stringify(allusers)
//     localStorage.setItem("allusers", jsonData); 
// }