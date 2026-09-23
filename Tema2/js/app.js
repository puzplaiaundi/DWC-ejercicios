const form=document.getElementById("form-factorial");
const num_input=document.getElementById("num-factorial");
const result_output=document.getElementById("factorial");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const num=Number(num_input.value);

    const result=factorial(num);
    console.log(result);
    result_output.textContent=`El factorial de ${num} es: ${result}`;

});

function factorial(n){
    if(n<2){
        return 1;
    }
    else {return n*factorial(n-1);

    }
}