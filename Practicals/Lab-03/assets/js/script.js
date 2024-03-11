function returnUserInfo()
{
    if(document.getElementById("textBox").value === " ")
    {
        alert("Fill in form correctly please! ");
    }
}

if(document.getElementById("textBox").value === " ")
{
    alert("Text box cannot be empty! ");
}

// const sumButton = document.getElementById("sumBut");
// const edButton = document.getElementById("edBut");
// const dsButton = document.getElementById("dsBut");
// const werButton = document.getElementById("werBut");
// const hobInBut = document.getElementById("hiBut");
   const sumInformation = document.getElementById("sumInfo");
// const sumInfo = ;

function sumDropDown()
{
    sumInformation.style.display = "contents";
}


function openLinkedIn()
{
    // Opens Linked in in a different tab  
    window.open("https://www.linkedin.com/in/sine-whooley/", 'new Window ');
}