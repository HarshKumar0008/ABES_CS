const callBackFun = () => {
    const inputDob = document.getElementById("dob").value;
    if (!inputDob) {
        console.log("Please enter your date of birth.");
        return;
    }
    const dob = new Date(inputDob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    console.log("Your age is: " + age);
};

const btn = document.getElementById("btn");
btn.addEventListener("click", callBackFun);