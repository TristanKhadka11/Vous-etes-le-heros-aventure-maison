const chapters = {
    menu: {
        titre: "AVENTURE MAISON",
        description: "Vous jouez avec votre meilleur ami Judy au basketball. Une journée comme les autres...",
        image: "./assets/img/basketball.PNG",
        boutons: [{ titre: "Commencer", destination: "rue" }]
    },

    rue: {
        titre: "BRUIT INATTENDU",
        description: "Soudain, vous entendez un cri provenant de la maison voisine d'en face.",
        image: "./assets/img/maison_monstre_sanstitre.webp",
        boutons: [
            { titre: "Coup d'œil par le gazon", destination: "gazon" },
            { titre: "Cogner à la porte", destination: "porte1" },
            { titre: "Sonner à la porte", destination: "porte2" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    gazon: {
        titre: "REGARDEZ OÙ VOUS MARCHEZ",
        description: "Une racine vous agrippe le pied et vous mourez enseveli sous la terre.",
        image: "./assets/img/racine2.PNG",
        boutons: [{ titre: "Recommencer", destination: "menu" }]
    },

    porte1: {
        titre: "LA PORTE ?",
        description: "Vous décidez de cogner. La porte s'ouvre d'elle-même et vous remarquez qu'il fait sombre à l'intérieur.",
        image: "./assets/img/porte.PNG",
        boutons: [
            { titre: "Entrer en utilisant un briquet", destination: "briquet" },
            { titre: "Entrer sans précaution", destination: "sansbriquet" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    porte2: {
        titre: "LA PORTE ?",
        description: "Vous décidez de sonner. La porte s'ouvre d'elle-même et vous remarquez qu'il fait sombre à l'intérieur.",
        image: "./assets/img/porte.PNG",
        boutons: [
            { titre: "Entrer en utilisant une lumière", destination: "briquet" },
            { titre: "Entrer sans précaution", destination: "sansbriquet" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    sansbriquet: {
        titre: "IL FAIT SOMBRE !",
        description: "Vous entrez sans précaution. Un trou dans le sol se trouve à l'entrée du plancher, vous tombez et mourez de chute.",
        image: "./assets/img/tomber2.PNG",
        boutons: [{ titre: "Recommencer", destination: "menu" }]
    },

    briquet: {
        titre: "DANS LA GUEULE DU LOUP",
        description: "Vous entrez en esquivant un trou qui est à l'entrée du plancher. La porte se referme derrière vous. (Les cris s'intensifient)",
        image: "./assets/img/sousol.PNG",
        boutons: [
            { titre: "Descendre les escaliers", destination: "escaliers" },
            { titre: "Prendre une clé sur une étagère", destination: "cle" },
            { titre: "Crier pour que la personne indique où elle se trouve", destination: "crier" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    crier: {
        titre: "CHUTT !",
        description: "La maison vous lance des pieux et vous tue.",
        image: "./assets/img/maison.PNG",
        boutons: [
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    escaliers: {
        titre: "TROUVÉ !",
        description: "Le voisin se trouvait derrière vous. Vous descendez plus vite pour le fuir.",
        image: "./assets/img/monter.PNG",
        boutons: [
            { titre: "Continuer", destination: "hall" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    cle: {
        titre: "C'EST MIEUX QUE RIEN",
        description: "Vous trouvez une clé sur une étagère, ce sera peut-être utile. Le voisin marche derrière vous et vous prenez les escaliers pour le fuir.",
        image: "./assets/img/cle.PNG",
        boutons: [
            { titre: "Continuer", destination: "hall" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    hall: {
        titre: "DEUX CHOIX",
        description: "Vous pensez avoir fui le voisin. Deux portes se trouvent devant vous.",
        image: "./assets/img/2portes.PNG",
        boutons: [
            { titre: "Porte de droite", destination: "portedroite" },
            { titre: "Porte de gauche", destination: "portegauche" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    portedroite: {
        titre: "ÇA PUE",
        description: "Vous ouvrez la porte et un gaz toxique sort de la pièce et vous tue.",
        image: "./assets/img/gas.jpg",
        boutons: [
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    portegauche: {
        titre: "",
        description: "Vous ouvrez la porte et une fille se trouve dans une cage. Avez-vous la clé pour la sortir ?",
        image: "./assets/img/cadenat.PNG",
        boutons: [
            { titre: "Oui", destination: "fin" },
            { titre: "Non", destination: "sanscle" },
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    fin: {
        titre: "BRAVO !",
        description: "Vous avez sauvé la fille en entrant dans la cage pour l'aider. La porte se referme contre vous...",
        image: "./assets/img/IMG_6547.PNG",
        boutons: [
            { titre: "Recommencer", destination: "menu" }
        ]
    },

    sanscle: {
        titre: "PAS ASSEZ VITE !",
        description: "Le voisin de la maison vous a trouvé. Il vous attrape et vous tue.",
        image: "./assets/img/IMG_6557.PNG",
        boutons: [
            { titre: "Recommencer", destination: "menu" }
        ]
    },
};

function goToChapter(chapterCle) {
    const chapter = chapters[chapterCle];

    if (!chapter) {
        console.error("Le chapitre n'existe pas.");
        return;
    }

 
    chapter.boutons.forEach((bouton) => {
        console.log(bouton.titre + " (Destination : " + bouton.destination + ")");
    });
}

let twist = false;

function updateChapterContent(chapterKey) {
    const chapter = chapters[chapterKey];
    
    if (!chapter) {
        console.error("Le chapitre n'existe pas.");
        return;
    }
    
    document.getElementById('chapterTitle').textContent = chapter.titre;
    document.getElementById('chapterDescription').textContent = chapter.description;
    document.getElementById('chapterImage').src = chapter.image;

    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; 
    
    chapter.boutons.forEach((bouton) => {
        const newButton = document.createElement('button');
        newButton.textContent = bouton.titre;
        newButton.addEventListener('click', () => {
            goToChapter(bouton.destination);
        });
        buttonContainer.appendChild(newButton);
    });

    if (chapterKey === "maison") {
        twist = true; // C'est ici que vous modifiez la twist
    }
}

function goToChapter(chapterKey) {
    updateChapterContent(chapterKey);
}

updateChapterContent("menu");



