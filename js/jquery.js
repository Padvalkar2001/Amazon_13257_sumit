const emailNode=$("#email");
const passNode=$("#pass");
const formNode=$("#enrollmentForm");

const errorNode1=$("#error1")
const errorNode2=$("#error2")

emailNode.on('keyup', ()=>validate5())
passNode.on('keyup', ()=>validate6())

formNode.on("submit", ()=>validateAll())

let email="";
let pass="";

const invalidBorder="4px solid red";
const validBorder="4px solid green";

const requireMessage="This field is required";

function validate5(){
    errorNode1.text("")
    emailNode.css("border",invalidBorder);
    email=emailNode.val();
    if(email==""){
        errorNode1.text(requireMessage)
        return false;
    }
    // else if (emailPattern.test(email)==false){
    //      errorNode5.text("Please enter valid email")
    //      return false;
    // }
    else{
        emailNode.css("border",validBorder)
        return true;
    }
}

function validate6(){
    errorNode2.text("")
    passNode.css("border",invalidBorder);
    pass=passNode.val();
    //console.log(pass);
    if(pass==""){
        errorNode2.text(requireMessage)
        return false;
       }
    // else if(passwordPattern.test(pass)==false){
    //      errorNode6.text("password must contain atleast one small alphabet, capital alphabet, digit, special symbol(!#@%&?). password must be 5 to 12 characters long");
    //      return false;
    // }
    else{
        passNode.css("border",validBorder)
        return true;
    }
}

function validateAll(){
    // console.log("in function ");
     // if all fields are valid then only return true else return false
    //  const state1=validate1();
    //  const state2=validate2();
    //  const state3=validate3();
    //  const state4=validate4();
     const state5=validate5();
     const state6=validate6();
    //  console.log(fname);
     
     return (state5 && state6)
 }

 $("#showp").change(() => togglePass());
        function togglePass() {
            // console.log( $("#showp").prop("checked")); 
            if ($("#showp").prop("checked"))
                passNode.attr("type", "text")
            else
                passNode.attr("type", "password")
        }