document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var generatedResume = document.getElementById("generatedResume");
    var imageUpload = document.getElementById("imageUpload");
    var profilePic = document.getElementById("profilePic");
    var changeImageBtn = document.getElementById("changeImageBtn");
    changeImageBtn.addEventListener("click", function () { return imageUpload.click(); });
    imageUpload.addEventListener("change", function () {
        var file = imageUpload.files ? imageUpload.files[0] : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) { var _a; return (profilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result); };
            reader.readAsDataURL(file);
        }
    });
    function makeEditable(element) {
        element.addEventListener("click", function () {
            var currentText = element.innerText;
            var inputType = element.classList.contains("textarea") ? "textarea" : "input";
            var inputElement = document.createElement(inputType === "textarea" ? "textarea" : "input");
            inputElement.className = "edit-input";
            inputElement.value = currentText;
            element.replaceWith(inputElement);
            inputElement.focus();
            inputElement.addEventListener("blur", function () {
                element.innerText = inputElement.value;
                inputElement.replaceWith(element);
            });
            inputElement.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    element.innerText = inputElement.value;
                    inputElement.replaceWith(element);
                }
            });
        });
    }
    ["resume-name", "resume-email", "resume-phone", "resume-address", "resume-education",
        "resume-skills-list", "resume-experience", "resume-projects", "resume-languages-list",
        "resume-certifications", "resume-hobbies"].forEach(function (className) {
        var elements = document.querySelectorAll(".".concat(className));
        elements.forEach(function (element) { return makeEditable(element); });
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var getElementValue = function (id) { return document.getElementById(id).value; };
        document.querySelector(".resume-name").innerText = getElementValue("name");
        document.querySelector(".resume-email").innerText = getElementValue("email");
        document.querySelector(".resume-phone").innerText = getElementValue("phone");
        document.querySelector(".resume-address").innerText = getElementValue("address");
        document.querySelector(".resume-education").innerText = getElementValue("education");
        document.querySelector(".resume-skills-list").innerText = getElementValue("skills");
        document.querySelector(".resume-experience").innerText = getElementValue("experience");
        document.querySelector(".resume-projects").innerText = getElementValue("projects");
        document.querySelector(".resume-languages-list").innerText = getElementValue("languages");
        document.querySelector(".resume-certifications").innerText = getElementValue("certifications");
        document.querySelector(".resume-hobbies").innerText = getElementValue("hobbies");
        generatedResume.style.display = "block";
    });
});
