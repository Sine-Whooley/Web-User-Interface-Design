const button = document.getElementById('colourChange');

window.onload = function()
{
    alert("Welcome to my online CV!");
};

button.addEventListener('click', colourChange);

function colourChange()
{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

}



