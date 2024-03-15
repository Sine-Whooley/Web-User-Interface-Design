function returnUserInfo()
{
    if(document.getElementById("textBox").value === " ")
    {
        alert("Fill in form correctly please! ");
    }
}


const splashScreen = document.getElementsByClassName("splashScreen")[0];
const homePageDisplay = document.getElementsByClassName("homePageDisplay")[0];

function changeLight(){
    console.log("light runs");
    document.body.style.backgroundColor = "#e9e9e9";
    document.body.style.color = "#161515";

    splashScreen.style.display = "none";
    homePageDisplay.style.display = "contents";

}

function changeDark(){
    console.log("dark runs");
    document.body.style.backgroundColor = "#161515";
    document.body.style.color = "#e9e9e9";

    splashScreen.style.display = "none";
    homePageDisplay.style.display = "contents";

}

// const  helloMsg = document.getElementsByClassName("");
 
// $(document).ready(function(){
//     //
//     $(".").click(function() {

//         $(".").fadeOut(1000);
//     })
// })

function openLinkedIn()
{
    // Opens Linked in in a different tab  
    window.open("https://www.linkedin.com/in/sine-whooley/", 'new Window ');
}


