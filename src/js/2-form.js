document.addEventListener("DOMContentLoaded", function () {
    let formData = { email: "", message: "" };

    const form = document.querySelector("form");

    form.addEventListener("input", function (event) {
        if (event.target.matches("[name='email']")) {
            formData.email = event.target.value;
        } else if (event.target.matches("[name='message']")) {
            formData.message = event.target.value;
        }

        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    });

    const storedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (storedFormData) {
        formData = storedFormData;
        form.querySelector("[name='email']").value = formData.email;
        form.querySelector("[name='message']").value = formData.message;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (formData.email.trim() === "" || formData.message.trim() === "") {
            alert("Fill please all fields");
        } else {
            console.log(formData);
            localStorage.removeItem("feedback-form-state");
            formData = { email: "", message: "" };
            form.reset();
        }
    });
});