document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleMore");
    const moreText = document.getElementById("moreText");
    let visible = false;

    button.addEventListener("click", () => {
        visible = !visible;
        moreText.classList.toggle("hidden");
        button.textContent = visible ? "Kevesebb mutatása" : "Több mutatása";
    });
});
