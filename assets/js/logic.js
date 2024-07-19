// document.addEventListener('DOMContentLoaded', function() {
//     const toggleModeButton = document.getElementById('toggleMode');
    
//     // Check if dark mode is already enabled
     if (localStorage.getItem('darkMode') === 'enabled') {
         document.body.classList.add('dark-mode');
     }

//     toggleModeButton.addEventListener('click', function() {
//         document.body.classList.toggle('dark-mode');

//     });
// });

document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', "disabled");
    }
});






