//---------------------------Implementation-for-pakistan-number-------------------------------//


const phoneInput = document.querySelector("#tel-pakistan");

phoneInput.addEventListener('input',()=>{
    // Regular expression for pakistans number phones
     const regex = /^(\+92|0)\d{9}$/;
     if(!regex.test(phoneInput)){
        phoneInput.setCustomValidity("The number phone must be pakistan")
     }else{
        phoneInput.setCustomValidity("")
     }
    //  Just for only input number
     const phoneNumber = phoneInput.value;
     phoneInput.value = phoneNumber.replace(/[^0-9]/g, '')
});
// exclude a letter when the user is typing his number phone
phoneInput.addEventListener('keydown',(e)=>{
    const key = e.key;
    const isNumeric = /^\d+$/.test(key);
    if(!isNumeric && key !=='Backspace' && key !=='Delete'){
        e.preventDefault();
    }
})

