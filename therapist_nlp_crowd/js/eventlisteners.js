function Onboard_View_1_Check_ClickEvent(event){
    var consent_checkbox = event.target;
    //alert(consent_checkbox);
    if(consent_checkbox.checked){
        //alert("The checkbox is checked.");
        consent = true;
        console.log(consent);
        if(state=="get_consent"){
            main_controller("set_consent");
        }
    }else{
        //alert("The checkbox is not checked.");
        consent = false;
        console.log(consent);
    }
}

function Onboard_View_1_Next_ClickEvent(){
    //alert("Click Next");
    if(state=="set_consent"){
        main_controller("get_condition");
    }else if(state=="orientation" && study.condition.role=="therapist"){
        main_controller("assessment");
    }else if(state=="orientation" && study.condition.role=="client"){
        window.open(urladdress.clientcondition.urladdress,"_self");
    }else if(state=="condition" && study.condition.condition_crowd == "true" && study.condition.condition_nlp == "true"){
        window.open(urladdress.therapistnlpcrowdcondition.urladdress,"_self");
    }else if(state=="condition" && study.condition.condition_crowd == "false" && study.condition.condition_nlp == "true"){
        window.open(urladdress.therapistnlpcondition.urladdress,"_self");
    }else if(state=="condition" && study.condition.condition_crowd == "true" && study.condition.condition_nlp == "false"){
        window.open(urladdress.therapistcrowdcondition.urladdress,"_self");
    }else if(state=="condition" && study.condition.condition_crowd == "false" && study.condition.condition_nlp == "false"){
        window.open(urladdress.therapistcondition.urladdress,"_self");
    }
}

function Onboard_View_2_Login_ClickEvent(){
    //alert("Login");
    username = Onboard_View_2_Username.value;
    console.log(username);
    password = Onboard_View_2_Password.value;
    console.log(password);
    main_controller("orientation");
}

function Onboard_View_2_Signup_ClickEvent(){
    //alert("Sign up");
    main_controller("set_condition");
}

function Onboard_View_3_MultiResponse_ClickEvent(event){
    console.log(event.target);
    response = event.target.textContent;
    console.log(response);
}

function Onboard_View_3_Response_ClickEvent(){
    //alert("Response to client");
}

function Onboard_View_3_Next_ClickEvent(){
    //alert("Moving on");
}

function Onboard_View_4_MultiResponse_ClickEvent(event){
    console.log(event.target);
    Onboard_View_4_MultiResponse_Item1.style.backgroundColor = "#e2e3e5";
    Onboard_View_4_MultiResponse_Item2.style.backgroundColor = "#e2e3e5";
    Onboard_View_4_MultiResponse_Item3.style.backgroundColor = "#e2e3e5";
    Onboard_View_4_MultiResponse_Item4.style.backgroundColor = "#e2e3e5";
    event.target.style.backgroundColor = "darkgray";
    switch(event.target.getAttribute("id")){
        case "Onboard_View_4_MultiResponse_Item1":
            response = "1";
            break;
        case "Onboard_View_4_MultiResponse_Item2":
            response = "2";
            break;
        case "Onboard_View_4_MultiResponse_Item3":
            response = "3";
            break;
        case "Onboard_View_4_MultiResponse_Item4":
            response = "4";
            break;
    }
    console.log(response);
}

function Onboard_View_4_Answer_ClickEvent(){
    //alert("Submit answer");
    if(response == answer){
        //alert("Correct!");
        var score = study.participant.assessmentscore;
        ++score;
        study.participant.assessmentscore = score;
        console.log(study.participant.assessmentscore);
    }else{
        //alert("Incorrect!");
        var score = study.participant.assessmentscore;
        study.participant.assessmentscore = score;
        console.log(study.participant.assessmentscore);
    }
    assessments[assessment_key].response = response;
    console.log(assessment_key_index);
    if(assessment_key_index == 0){
        main_controller("condition");
    }else{
        main_controller("assessment");
    }
}

Onboard_View_1_Check.addEventListener("click",Onboard_View_1_Check_ClickEvent);
Onboard_View_1_Next.addEventListener("click",Onboard_View_1_Next_ClickEvent);
Onboard_View_2_Login.addEventListener("click",Onboard_View_2_Login_ClickEvent);
Onboard_View_2_Signup.addEventListener("click",Onboard_View_2_Signup_ClickEvent);
Onboard_View_3_MultiResponse_Item1.addEventListener("click",Onboard_View_3_MultiResponse_ClickEvent,false);
Onboard_View_3_MultiResponse_Item2.addEventListener("click",Onboard_View_3_MultiResponse_ClickEvent,false);
Onboard_View_3_MultiResponse_Item3.addEventListener("click",Onboard_View_3_MultiResponse_ClickEvent,false);
Onboard_View_3_MultiResponse_Item4.addEventListener("click",Onboard_View_3_MultiResponse_ClickEvent,false);
Onboard_View_3_Response.addEventListener("click",Onboard_View_3_Response_ClickEvent);
Onboard_View_3_Next.addEventListener("click",Onboard_View_3_Next_ClickEvent);
Onboard_View_4_MultiResponse_Item1.addEventListener("click",Onboard_View_4_MultiResponse_ClickEvent,false);
Onboard_View_4_MultiResponse_Item2.addEventListener("click",Onboard_View_4_MultiResponse_ClickEvent,false);
Onboard_View_4_MultiResponse_Item3.addEventListener("click",Onboard_View_4_MultiResponse_ClickEvent,false);
Onboard_View_4_MultiResponse_Item4.addEventListener("click",Onboard_View_4_MultiResponse_ClickEvent,false);
Onboard_View_4_Answer.addEventListener("click",Onboard_View_4_Answer_ClickEvent);

