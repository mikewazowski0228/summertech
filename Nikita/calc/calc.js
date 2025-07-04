

function append(value)
{
    document.getElementById("inputval").value
 += value
}

function calculate(){
    document.getElementById("inputval").value
 = eval(document.getElementById("inputval").value
 )
}

function clearInput(){
    document.getElementById("inputval").value = ''
}