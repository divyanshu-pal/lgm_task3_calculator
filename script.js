const fdata = document.getElementById("fdata");

function myfunction(data){
    if (data == "remove"){
        fdata.innerText = ""
    }
    else if (data == "enter"){
        fdata.innerText = eval(fdata.innerText);
    }
    else{
        fdata.innerText = fdata.innerText + data;
    }
}