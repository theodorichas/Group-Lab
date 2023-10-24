let Form_Input = document.getElementById("Member-Form");

Form_Input.addEventListener("submit", (validate)=>{
    validate.preventDefault();
    let User_Name = document.getElementById("Name-Box");
    let Gender_If_Male = document.getElementById("Male-Box");
    let Gender_If_Female = document.getElementById("Female-Box");
    let User_Email = document.getElementById("Email-Box");
    let User_Address = document.getElementById("Address-Box");
    let User_News = document.getElementById("NewsLetter");
    let val = document.getElementById("err-msg");
    val.innerHTML="";

    if(User_Name.value.length<4||User_Name.value.length>50){
        val.innerHTML= "-!- Name must be between 4 and 50 chacacters long!";
        return;
    }else if(!Gender_If_Male.checked&&!Gender_If_Female.checked){
        val.innerHTML = "-!- You must select one of the gender!";
        return;
    }else if(!User_Email.value){
        val.innerHTML = "-!- Email must not be empty!";
        return;
    }else if(!User_Email.value.indexOf('@')!=-1  && !User_Email.value.endsWith(".com")){
        val.innerHTML = "-!- Email must contain '@' and '.com'!";
        return;
    }else if(User_Email.value.charAt(User_Email.value.indexOf('@')+1)=='.'){
        val.innerHTML = "-!- After '@' must not be a '.'!";
        return;
    }else if(User_Address.value==''){
        val.innerHTML = "-!- Address must not be empty!";
        return;
    }else if(!User_Address.value.startsWith("Jl.")){
        val.innerHTML = "-!- Address must begin with 'Jl.'";
        return;
    }else{
        let check = confirm("Are you sure you want to submit?");
        if(check){
            let suc = alert("Submission successful!");
            location.reload();
        }
    }
    
})

