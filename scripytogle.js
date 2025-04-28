function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    document.querySelectorAll('p, h2').forEach(element => {
        element.classList.toggle('dark-text');
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const alertCard = document.getElementById('alertCard');
    const closeButton = document.getElementById('closeAlert');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
           
            alertCard.classList.remove('hidden');
            
            
            this.reset();
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
         
            alertCard.classList.add('hidden');
        });
    }

    if (alertCard) {
        
        alertCard.addEventListener('click', function(e) {
            if (e.target === alertCard) {
                alertCard.classList.add('hidden');
            }
        });
    }
});