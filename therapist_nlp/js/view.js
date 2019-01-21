console.log("Getting views...");

var Onboard_View_1 = document.getElementById("Onboard_View_1");
var Onboard_View_2 = document.getElementById("Onboard_View_2");
var Onboard_View_3 = document.getElementById("Onboard_View_3");
var Onboard_View_4 = document.getElementById("Onboard_View_4");

console.log(Onboard_View_1);
console.log(Onboard_View_2);
console.log(Onboard_View_3);
console.log(Onboard_View_4);

function Hide_Views(){
    Onboard_View_1.style.display = "none";
    Onboard_View_2.style.display = "none";
    Onboard_View_3.style.display = "none";
    Onboard_View_4.style.display = "none";
}

function Control_Views(view){
    console.log("Refreshing views...");
    Hide_Views();
    console.log("Showing view... "+view);
    switch(view){
    case "Onboard_View_1":
        Onboard_View_1.style.display = "flex";
        break;
    case "Onboard_View_2":
        Onboard_View_2.style.display = "flex";
        break;
    case "Onboard_View_3":
        Onboard_View_3.style.display = "flex";
        break;
    case "Onboard_View_4":
        Onboard_View_4.style.display = "flex";
        break;
    }
}