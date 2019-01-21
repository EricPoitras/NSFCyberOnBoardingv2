var messages={
    messages_consent:{
        header:"Consent",
        text:"Evaluation of Online Training Curriculum<br><br>This study is looking at what factors influence listening skills and how we can help people learn better listening skills.  We are doing this study because we would like to better understand how to improve these skills.<br><br>We would like you to either play the role of a simulated person or engage with a simulated person and to do your best to listen and respond.  We may give you some information to help with your listening skills during this process.   At the end you will be asked to take a brief survey.  You may end up interacting with a real person who is playing the role of a client or a computer-simulated person (not another human).<br><br>The risks of this study are minimal. You will not be identified in the data from this study; however, anything you say to the simulated person may be made public so please do not disclose any additional identifying or sensitive information.<br>If you have any questions, complaints, or if you feel you have been harmed by this research please contact Michael Tanana, Social Research Institute, University of Utah, 801-585-9228.<br><br>Contact the University of Utah Institutional Review Board (IRB) if you have questions regarding your rights as a research participant. Also, contact the IRB if you have questions, complaints or concerns which you do not feel you can discuss with the investigator. The University of Utah IRB may be reached by phone at (801) 581-3655 or by e-mail at irb@hsc.utah.edu.<br><br>It should take less than 25 minutes to complete this process. Participation in this study is voluntary. You can choose not to take part. You can choose not to finish the questionnaire or omit any question you prefer not to answer without penalty or loss of benefits.  If you consent to participate, please click 'I agree' below.  Thank you so much for helping us with our research!"
    },
    messages_orientation_client:{
        header:"Orientation",
        text:"For the next few minutes you will be playing the role of a client who is…. You will play the role of this client and submit responses to the therapist based on that role.<br><br>On the next screen you will see a chat interface not unlike you might see on your phone or an online instant messaging service.<br><br>You will be presented with a text box where you can submit responses to a person in the therapist role who is learning how to be a helpful listener. The therapist will respond after you post and then you can respond again.<br><br>In addition, you will be able to rate the helpfulness of each statement the therapist makes to you. Simply click on the ‘helpful’ button linked to the statement if you felt what the therapist was said might have been helpful to the client you are playing.<br><br>Try and be as faithful to the client role as you can."
    },
    messages_orientation_therapist:{
        header:"Orientation",
        text:"During this study you will be interacting with simulated **client** -  a person who is seeking some help. This simulated person might be a bot or person, but either way will be acting out a role and not a real situation. Your role is to act as their **therapist** and to practice being as helpful as you can using specific sorts of listening skills.<br><br>By listening skills we mean something very specific. Your goal is to try and non-judgmentally listen to your client using two key skills:  **open questions**  and **reflections**.<br><br>An **open question** is a question that cannot be answered with a simple yes or no answer.  The goal is to elicit a longer response and allow the listener to express his or her feelings.  For example, 'how are you feeling today?' is a good example of an open question.<br><br>A **reflection** is a way of communicating to your client that you are trying to understand by repeating back a version what you think they have been saying. It is important to avoid including any judgment, confrontation or advising in what you say to the client.  For example, 'it sounds like you're having a hard time at work' would be a reflection if the client was talking about problems at work.  A reflection lets your client understand that you are listening non-judgmentally."
    },
    messages_condition_therapist:{
        header:"Orientation",
        text:"On the next screen you will see a chat interface not unlike you might see on your phone or an online instant messaging service.<br><br>You will be presented with a text box where you can submit responses to the simulated client by clicking submit. The simulated client will respond and then you can respond again.<br><br>Try and be as helpful as you can."
    },
    messages_condition_crowd:{
        header:"Orientation",
        text:"On the next screen you will see a chat interface not unlike you might see on your phone or an online instant messaging service.<br><br>You will be presented with a text box where you can submit responses to the simulated client by clicking submit.<br><br>After you submit your response you will be presented with sets of 3 different statements from other people who also were responding to the client Of the 3 statements, please pick the one you find the most helpful. (your statements will be rated by other people). You will repeat this process a few times and then the statement picked the most will be presented to the client.<br><br>The simulated client will respond and then you can respond again.<br><br>Try and be as helpful as you can."
    },
    messages_condition_nlp:{
        header:"Orientation",
        text:"On the next screen you will see a chat interface not unlike you might see on your phone or an online instant messaging service.<br><br>You will be presented with a text box where you can submit responses to the simulated client by clicking submit. Each response you submit will be automatically labeled by a system that recognizes where a statement is an open question or reflection. If the system doesn’t find that you are utilizing these skills, it will offer you additional explanation and encouragement to keep trying.<br><br>The simulated client will respond and then you can respond again.<br><br>Try and be as helpful as you can."
    },
    messages_condition_nlpcrowd:{
        header:"Orientation",
        text:"On the next screen you will see a chat interface not unlike you might see on your phone or an online instant messaging service.<br><br>You will be presented with a text box where you can submit responses to the client by clicking submit.<br><br>Each response you submit will be automatically labeled by a system that recognizes where a statement is an open question or reflection. If the system doesn’t find that you are utilizing these skills, it will offer you additional explanation and encouragement to keep trying.<br><br>In addition, after you submit your response you will be presented with sets of 3 different statements from other people who also were responding to the client Of the 3 statements, please pick the one you find the most helpful. (your statements will be rated by other people). You will repeat this process a few times and then the statement picked the most will be presented to the client.<br><br>The simulated client will respond and then you can respond again.<br><br>Try and be as helpful as you can."
    }
}

var urladdress={
    clientcondition:{
        urladdress:"http://www.addclienturlhere.com"
    },
    therapistcondition:{
        urladdress:"http://www.addtherapisturlhere.com"
    },
    therapistnlpcondition:{
        urladdress:"http://www.addnlpurlhere.com"
    },
    therapistcrowdcondition:{
        urladdress:"http://www.addcrowdurlhere.com"
    },
    therapistnlpcrowdcondition:{
        urladdress:"http://www.addnlpcrowdurlhere.com"
    }
}

var assessments={
    assessment1:{
        instruction:"An open question is:",
        item1:"a question that is thought provoking",
        item2:"a question that cannot be answered with just a yes or no answer",
        item3:"a question that cannot be answered at all",
        item4:"a question that isn't finished",
        answer:"2",
        response:""
    },
    assessment2:{
        instruction:"A reflection is:",
        item1:"A means of ending a therapy session",
        item2:"The therapist thinking out loud about the client's problems",
        item3:"A restatement of what the client has been saying",
        item4:"A philosopical question",
        answer:"3",
        response:""
    },
    assessment3:{
        instruction:"In the following exercise, you are encouraged to:",
        item1:"Just have an engaging conversation",
        item2:"Talk as little as possible",
        item3:"Use open questions and reflections as much as possible",
        item4:"Use open and closed questions as little as possible",
        answer:"3",
        response:""
    }
}

// Database table with data to get and set from the app to the backend
var study={
    participant:{
        id:"232345213", //Identifier
        password:"akvhwjdnhso290", //Password for authentification purposes
        assessmentscore: "0" // Score calculated and updated based on answers to questions
    },
    condition:{
        role:"therapist", //Roles takes either client or therapist,
        condition_nlp: "true", //Condition_nlp takes either value true or false
        condition_crowd: "false" // Condition_crowd takes either value true or false
    }
}

