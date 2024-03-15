const pressMeButt = document.getElementById("pressMeBut");


document.querySelector(pressMeButt).addEventListener('mouseover', function(){
    this.style.backgroundColor = "yellowgreen";
    this.style.color = "black";
})


document.querySelector(pressMeButt).addEventListener('mouseout', function(){
    this.style.backgroundColor = " ";
    this.style.color = " ";
})

function returnUserInfo()
{
    if(document.getElementById("textBox").value === " ")
    {
        alert("Fill in form correctly please! ");
    }
}


function changeLight(){
    console.log("light runs");

    // document.body.style.backgroundColor = "white";
    // document.body.style.color = "black";

}




function changeDark(){
    console.log("dark runs");

    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "Aqua";

}

function openLinkedIn()
{
    // Opens Linked in in a different tab  
    window.open("https://www.linkedin.com/in/sine-whooley/", 'new Window ');
}