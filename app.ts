document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const generatedResume = document.getElementById("generatedResume") as HTMLDivElement;
    const imageUpload = document.getElementById("imageUpload") as HTMLInputElement;
    const profilePic = document.getElementById("profilePic") as HTMLImageElement;
    const changeImageBtn = document.getElementById("changeImageBtn") as HTMLButtonElement;

    changeImageBtn.addEventListener("click", () => imageUpload.click());

    imageUpload.addEventListener("change", () => {
        const file = imageUpload.files ? imageUpload.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => (profilePic.src = e.target?.result as string);
            reader.readAsDataURL(file);
        }
    });

    function makeEditable(element: HTMLElement) {
        element.addEventListener("click", () => {
            const currentText = element.innerText;
            const inputType = element.classList.contains("textarea") ? "textarea" : "input";
            const inputElement = document.createElement(inputType === "textarea" ? "textarea" : "input");

            inputElement.className = "edit-input";
            inputElement.value = currentText;
            element.replaceWith(inputElement);

            inputElement.focus();

            inputElement.addEventListener("blur", () => {
                element.innerText = inputElement.value;
                inputElement.replaceWith(element);
            });

            inputElement.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    element.innerText = inputElement.value;
                    inputElement.replaceWith(element);
                }
            });
        });
    }

    ["resume-name", "resume-email", "resume-phone", "resume-address", "resume-education",
     "resume-skills-list", "resume-experience", "resume-projects", "resume-languages-list",
     "resume-certifications", "resume-hobbies"].forEach((className) => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach((element) => makeEditable(element as HTMLElement));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const getElementValue = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement).value;

        (document.querySelector(".resume-name") as HTMLElement).innerText = getElementValue("name");
        (document.querySelector(".resume-email") as HTMLElement).innerText = getElementValue("email");
        (document.querySelector(".resume-phone") as HTMLElement).innerText = getElementValue("phone");
        (document.querySelector(".resume-address") as HTMLElement).innerText = getElementValue("address");
        (document.querySelector(".resume-education") as HTMLElement).innerText = getElementValue("education");
        (document.querySelector(".resume-skills-list") as HTMLElement).innerText = getElementValue("skills");
        (document.querySelector(".resume-experience") as HTMLElement).innerText = getElementValue("experience");
        (document.querySelector(".resume-projects") as HTMLElement).innerText = getElementValue("projects");
        (document.querySelector(".resume-languages-list") as HTMLElement).innerText = getElementValue("languages");
        (document.querySelector(".resume-certifications") as HTMLElement).innerText = getElementValue("certifications");
        (document.querySelector(".resume-hobbies") as HTMLElement).innerText = getElementValue("hobbies");

        generatedResume.style.display = "block";
    });
});
