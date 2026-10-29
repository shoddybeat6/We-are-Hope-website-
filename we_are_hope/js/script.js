function showFormResponse(form, message) {
    let response = form.nextElementSibling;

    if (!response || !response.classList.contains("form-response")) {
        response = document.createElement("p");
        response.className = "form-response";
        response.setAttribute("role", "status");
        response.setAttribute("aria-live", "polite");
        form.insertAdjacentElement("afterend", response);
    }

    response.textContent = message;
}

function clearFormResponseOnEdit(form) {
    form.addEventListener("input", function() {
        const response = form.nextElementSibling;

        if (response && response.classList.contains("form-response")) {
            response.remove();
        }
    });
}

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
    clearFormResponseOnEdit(volunteerForm);

    volunteerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = volunteerForm.querySelector("#name").value.trim();
        const interest = volunteerForm.querySelector("#interest").value;

        showFormResponse(
            volunteerForm,
            `Thank you, ${name}, for your interest in ${interest}. Email info@wearehope.org.za for questions regarding the volunteer roll if you have any.`
        );
    });
}

const donationForm = document.getElementById("donationForm");

if (donationForm) {
    clearFormResponseOnEdit(donationForm);

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = donationForm.querySelector("#donorName").value.trim();

        showFormResponse(
            donationForm,
            `Thank you, ${name}.Your donation will give a smile to someone who needs it.`
        );
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    clearFormResponseOnEdit(contactForm);

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = contactForm.querySelector("#contactName").value.trim();

        showFormResponse(
            contactForm,
            `Thank you, ${name}. We will contact you soon.`
        );
    });
}