const fnameNode=document.getElementById("fname");
const emailNode=document.getElementById("email");
const passNode=document.getElementById("pass");
const cpassNode=document.getElementById("cpass");

const errorNode1=document.getElementById("error1")
const errorNode2=document.getElementById("error2")
const errorNode3=document.getElementById("error3")
const errorNode4=document.getElementById("error4")

fnameNode.addEventListener('keyup', ()=>validate1())
emailNode.addEventListener('keyup', ()=>validate2())
passNode.addEventListener('keyup', ()=>validate3())
cpassNode.addEventListener('keyup', ()=>validate4())

let fname="";
let email="";
let pass="";
let cpass="";

const requireMessage="This field is required";

//set patterns
const namePattern=new RegExp("^[A-Za-z ]*$");
const emailPattern=new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

const invalidBorder="4px solid red";
const validBorder="4px solid green";

function validate1(){
    errorNode1.textContent=""
    fname=fnameNode.value;
    fnameNode.style.border=invalidBorder;
    //console.log(namePattern.test(fname));
    if(fname==""){
        errorNode1.textContent=requireMessage
        return false;
    }
    else if(namePattern.test(fname)==false){
        errorNode1.textContent="first name must contain only alphabet"
        return false;
    }
    else {
        fnameNode.style.border=validBorder;
        return true;
    }

}

function validate2(){
    errorNode2.textContent=""
    emailNode.style.border=invalidBorder;
    email=emailNode.value;
    if(email==""){
        errorNode2.textContent=requireMessage
        return false;
    }
    else if (emailPattern.test(email)==false){
         errorNode2.textContent="Please enter valid email"
         return false;
    }
    else{
        emailNode.style.border=validBorder;
        return true;
    }
}

function validate3(){
    errorNode3.textContent=""
    passNode.style.border=invalidBorder;
    pass=passNode.value;
    //console.log(pass);
    if(pass==""){
        errorNode3.textContent=requireMessage
        return false;
       }
    // else if(passwordPattern.test(pass)==false){
    //      errorNode3.textContent="password must contain atleast one small alphabet, capital alphabet, digit, special symbol(!#@%&?). password must be 5 to 12 characters long";
    //      return false;
    // }
    else{
        passNode.style.border=validBorder;
        return true;
    }
}

function validate4(){
    errorNode4.textContent=""
    cpassNode.style.border=invalidBorder;
    cpass=cpassNode.value;
    if(cpass==""){
        errorNode4.textContent=requireMessage
        return false;
    }
    else if(cpass.valueOf()!=pass.valueOf()){
        errorNode4.textContent="Please match the password"
        return false;
    }
    else{
        cpassNode.style.border=validBorder;
        return true;
    }
}

function validateAll(){
    // console.log("in function ");
     // if all fields are valid then only return true else return false
     const state1=validate1();
     const state2=validate2();
     const state3=validate3();
     const state4=validate4();
     
     return (state1 && state2 && state3 && state4 && state5 && state6 && state7)
 }