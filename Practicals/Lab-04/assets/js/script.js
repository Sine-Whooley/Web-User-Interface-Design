function returnUserInfo()
{
    if(document.getElementById("textBox").value === " ")
    {
        alert("Fill in form correctly please! ");
    }
}


function changeLight(){
    console.log("light runs");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}

function changeDark(){
    console.log("dark runs");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "Aqua";

}

function openLinkedIn()
{
    // Opens Linked in in a different tab  
    window.open("https://www.linkedin.com/in/sine-whooley/", 'new Window ');
}