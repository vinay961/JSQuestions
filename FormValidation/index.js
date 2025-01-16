const form = document.getElementById('registrationForm');
const nextButtons = document.querySelectorAll("button[id^='next']");
const prevButtons = document.querySelectorAll("button[id^='prev']");
const steps = document.querySelectorAll('.form-step')

const validations = {
    name: (value) => value.trim().length > 2 || "Name must be at least 3 characters.",
    email: (value) => /\S+@\S+\.\S+/.test(value) || "Please enter a valid email.",
    address: (value) => value.trim().length > 5 || "Address must be at least 6 characters.",
    phone: (value) => /^\d{10}$/.test(value) || "Phone number must be 10 digits."
};

let currentStep = 0;

function showSteps(stepIndex){
    steps.forEach((step,index) => {
        // console.log(step.classList); // show which css is applied to current step
        step.classList.toggle("active",index === stepIndex) // if second parameter is true then active css is applied to that step otherwise it remove that css from step.
    })
}

nextButtons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        if(validateStep(index)){
            currentStep++;
            showSteps(currentStep);
        }
    })
})

prevButtons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        currentStep--;
        showSteps(currentStep);
    })
})

function validateStep(stepIndex){
    let isValid = true;
    const inputs = steps[stepIndex].querySelectorAll("input");

    inputs.forEach((input)=>{
        const errorDiv = document.getElementById(`${input.id}Error`);
        const validationFn = validations[input.name];

        if(validationFn){
            const validationResult = validationFn(input.value);
            if(validationResult !== true){
                errorDiv.textContent = validationResult;
                isValid = false;
            }
            else{
                errorDiv.textContent = "";
            }
        }
    })
    return isValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (validateStep(currentStep)) {
      alert("Form submitted successfully!");
      form.reset();
      currentStep = 0;
      showSteps(currentStep);
    }
});