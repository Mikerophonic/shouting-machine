window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        const input = document.getElementById("input").value;
        document.querySelector("span#output").innerText = input.toUpperCase();

        event.preventDefault();
    }
}