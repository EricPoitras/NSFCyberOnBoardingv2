function main_controller(action){
    switch(action){
        case "get_consent":
            Hide_Views();
            Control_Views("Onboard_View_1");
            Onboard_View_1_Header.innerHTML = messages.messages_consent.header;
            Onboard_View_1_Content.innerHTML = messages.messages_consent.text;
            Onboard_View_1_Next.disabled = true;
            state = "get_consent";
            break;
        case "set_consent":
            Onboard_View_1_Next.disabled = false;
            state = "set_consent";
            break;
        case "get_condition": 
            Hide_Views();
            Control_Views("Onboard_View_2");
            Onboard_View_2_Alert.style.display = "none";
            state = "get_condition";
            break;
        case "set_condition":
            // Get from database user id, password, and study conditions
            Onboard_View_2_Alert.style.display = "block";
            Onboard_View_2_Alert.innerHTML = "<p>You have successfully signed up for an account. To login, use the following username ("+study.participant.id+") and password ("+study.participant.password+").</p>";
            state = "set_condition";
            break;
        case "orientation":
            // Validate from database user the study info
            Hide_Views();
            Control_Views("Onboard_View_1");
            Onboard_View_1_Checkbox.style.visibility = "hidden";
            if(study.condition.role=="client"){
                Onboard_View_1_Header.innerHTML = messages.messages_orientation_client.header;
                Onboard_View_1_Content.innerHTML = messages.messages_orientation_client.text;
            }else{
                Onboard_View_1_Header.innerHTML = messages.messages_orientation_therapist.header;
                Onboard_View_1_Content.innerHTML = messages.messages_orientation_therapist.text;
            }
            state = "orientation";
            break;
        case "assessment":
            Hide_Views();
            Control_Views("Onboard_View_4");
            Onboard_View_4_Validation.style.display = "none";
            Onboard_View_4_MultiResponse_Item1.style.backgroundColor = "#e2e3e5";
            Onboard_View_4_MultiResponse_Item2.style.backgroundColor = "#e2e3e5";
            Onboard_View_4_MultiResponse_Item3.style.backgroundColor = "#e2e3e5";
            Onboard_View_4_MultiResponse_Item4.style.backgroundColor = "#e2e3e5";
            for(var key in assessments){
                console.log(assessments[key]);
                if(assessments[key].response==""){
                    Onboard_View_4_MultiResponse_Item.innerHTML = assessments[key].instruction;
                    Onboard_View_4_MultiResponse_Item1.innerHTML = assessments[key].item1;
                    Onboard_View_4_MultiResponse_Item2.innerHTML = assessments[key].item2;
                    Onboard_View_4_MultiResponse_Item3.innerHTML = assessments[key].item3;
                    Onboard_View_4_MultiResponse_Item4.innerHTML = assessments[key].item4;
                    answer = assessments[key].answer;
                    assessment_key = key;
                    assessment_key_index = Object.keys(assessments).indexOf(key);
                }
            }
            state = "assessment";
            break;
        case "condition":
            Hide_Views();
            Control_Views("Onboard_View_1");
            Onboard_View_1_Next.disabled = false;
            Onboard_View_1_Checkbox.style.visibility = "hidden";
            if(study.condition.condition_crowd=="true"&&study.condition.condition_nlp=="true"){
                Onboard_View_1_Header.innerHTML = messages.messages_condition_nlpcrowd.header;
                Onboard_View_1_Content.innerHTML = messages.messages_condition_nlpcrowd.text;
            }else if(study.condition.condition_crowd=="false"&&study.condition.condition_nlp=="true"){
                Onboard_View_1_Header.innerHTML = messages.messages_condition_nlp.header;
                Onboard_View_1_Content.innerHTML = messages.messages_condition_nlp.text;
            }else if(study.condition.condition_crowd=="true"&&study.condition.condition_nlp=="false"){
                Onboard_View_1_Header.innerHTML = messages.messages_condition_crowd.header;
                Onboard_View_1_Content.innerHTML = messages.messages_condition_crowd.text;
            }else{
                Onboard_View_1_Header.innerHTML = messages.messages_condition_therapist.header;
                Onboard_View_1_Content.innerHTML = messages.messages_condition_therapist.text;
            }
            state = "condition";
            break;
    
    }
}

