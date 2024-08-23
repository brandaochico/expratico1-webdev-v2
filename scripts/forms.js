function calcAge(){
    const userDate = new Date(document.getElementById("birth").value);
    const curDate = new Date();

    let age = curDate.getFullYear() - userDate.getFullYear();

    const userMonth = userDate.getMonth(), userDay = userDate.getDay();
    const curMonth = curDate.getMonth(), curDay = curDate.getDay();

    if(curMonth < userMonth || (curMonth === userMonth && curDay < userDay)){
        age--;
    }

    document.getElementById("age").textContent = `Idade: ${age} anos.`;
    return age;
}

function checkAge(){
    const userAge = calcAge();
    const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');


    if (userAge < 16 || userAge > 69) {
        checkboxes.forEach(checkbox =>{
            checkbox.disabled = true;
        });

        document.getElementById("warning").textContent = "A idade selecionada não permite você ser doador de sangue."
        document.getElementById("warning").style.display = "block";
    }

    else{
        document.getElementById("warning").style.display = "none";
        checkboxes.forEach(checkbox =>{
            checkbox.disabled = false;
        });
    }
}