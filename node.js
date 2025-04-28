function clicked() {
    // Appliquer ou retirer .rouge sur tous les <p>
    const styles = document.querySelectorAll('p');
    styles.forEach((p) => {
      p.classList.toggle('rouge');
    });

    // Modifier le contenu d’un paragraphe spécifique
    const paragraphe = document.getElementById('specialP');
    paragraphe.textContent = "Le texte a changé !";
  }

  function Addapp() {
    
    const titre = document.createElement('h1');
  
    
    titre.innerHTML = "Ceci est un H1 ajouté en JavaScript";
  
    titre.classList.add('addd');
  
    document.body.appendChild(titre);
  }
  