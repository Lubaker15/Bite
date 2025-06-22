const tabs = document.querySelectorAll(".auth__tab");
const forms = document.querySelectorAll(".auth__form");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("auth__tab--active"));
        forms.forEach((f) => f.classList.remove("auth__form--active"));

        tab.classList.add("auth__tab--active");
        document
            .getElementById(tab.dataset.tab + "-form")
            .classList.add("auth__form--active");
    });
});