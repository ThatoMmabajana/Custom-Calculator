let result = document.getElementById("display");
//erase everything
function clearDisplay(){
    result.value = "";
}

//erase per digit
function deleteLastDigit(){
    result.value = result.value.slice(0,-1);
}
let calculate =(number) =>{
    result.value +=number;
}

let calculateResult = () =>{
    try {
        result.value =eval(result.value);
    } catch (error) {
        alert("Invalid Input!");
    }
}