import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.addEventListener("DOMContentLoaded",function(){let e={email:"",message:""};const a=document.querySelector("form");a.addEventListener("input",function(t){t.target.matches("[name='email']")?e.email=t.target.value:t.target.matches("[name='message']")&&(e.message=t.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(e))});const m=JSON.parse(localStorage.getItem("feedback-form-state"));m&&(e=m,a.querySelector("[name='email']").value=e.email,a.querySelector("[name='message']").value=e.message),a.addEventListener("submit",function(t){t.preventDefault(),e.email.trim()===""||e.message.trim()===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset())})});
//# sourceMappingURL=commonHelpers2.js.map