let displayxyz = document.getElementById("display")
let buttonsxyz = (document.getElementsByClassName("btn"))
console.log(buttonxyz)


function isOpxyz(opxyz)
{
    if(opxyz==="+" || opxyz==="-" ||opxyz==="/" ||opxyz==="*")
    return true;
   return false; 
}
function clickingxyz(clickxyz)
{
    if(display.innerText===""){
        if(clickxyz!='0'){
            displayxyz.innerText = displayxyz.innerText+clickxyz;
        }
    }
        else{
            if(isOpxyz(clickxyz)&& isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1]))
            {
                displayxyz.innerText = displayxyz.innerText.slice(0,-1)
            }
            displayxyz.innerText = displayxyz.innerText+clickxyz
        }
    

}

function evalxyz()
{
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }
    catch (err){
        displayxyz.innerText = "Error"
    }
}

function clearxyz()
{
    displayxyz.innerText = ""
}

function backxyz()
{
    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
}