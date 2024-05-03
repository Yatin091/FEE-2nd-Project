document.addEventListener("DOMContentLoaded", function() {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var collapse = button.getAttribute('data-bs-target');
            var body = document.querySelector(collapse);
            button.classList.toggle('collapsed'); // Toggle the 'collapsed' class on the button
            if (body.classList.contains('show')) {
                body.classList.remove('show');
            } else {
                body.classList.add('show');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('bg-dark'); // Toggle dark background color on body
        document.querySelectorAll('.bg-light,.navbar').forEach(function(el) {
            el.classList.toggle('bg-dark'); // Toggle dark background color on elements with bg-light class
        });
        document.querySelectorAll('.col,.navbar-brand,.mt-5').forEach(function(el) {
            el.classList.toggle('bg-dark');
            el.classList.toggle('text-light'); // Toggle dark background color on elements with bg-secondary class
        });
        document.querySelectorAll('.bg-white').forEach(function(el) {
            el.classList.toggle('bg-dark'); // Toggle dark background color on elements with bg-white class
            el.classList.toggle('text-light'); // Toggle light text color on elements with bg-white class
        });
        document.querySelectorAll('.bg-primary').forEach(function(el) {
            el.classList.toggle('bg-dark'); // Toggle dark background color on elements with bg-primary class
            el.classList.toggle('text-light'); // Toggle light text color on elements with bg-primary class
        });
        // Toggle dark mode on accordion buttons
        document.querySelectorAll('.accordion-button').forEach(function(el) {
            el.classList.toggle('btn-dark'); // Toggle dark background color on accordion buttons
            el.classList.toggle('text-light'); // Toggle light text color on accordion buttons
        });
        // Toggle dark mode on accordion body
        document.querySelectorAll('.accordion-body').forEach(function(el) {
            el.classList.toggle('bg-dark'); // Toggle dark background color on accordion body
            el.classList.toggle('text-light'); // Toggle light text color on accordion body
        });
        document.querySelectorAll('.general').forEach(function(el) {
            el.classList.toggle('bg-dark'); // Toggle dark background color on accordion body
            el.classList.toggle('text-primary'); // Toggle light text color on accordion body
        });
    });
});