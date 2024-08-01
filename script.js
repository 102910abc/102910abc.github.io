
document.addEventListener('DOMContentLoaded', () => {
    
    const result = document.getElementById("result");

    const user_input = document.getElementById("inputField");
    const submit = document.getElementById("button");

    submit.adEventListner("click", () => {
        result.textCont = user_input.ariaValueMax;
    });

});