function showForm(formId)  {
    document.querySelectorAll(".form-content").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}