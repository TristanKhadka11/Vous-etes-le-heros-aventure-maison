const chapters = {
    menu: {
        titre: "AVENTURE MAISON",
        description: "Vous jouez avec votre meilleur ami Judy au basketball. Une journée comme les autres...",
        image: "./assets/img/basketball.PNG",
        video: "",
        son: "./assets/son/basketball.mp3",
        son1: "./assets/son/atmo5.mp3",
        son2: "",
        boutons: [{
            titre: "Commencer",
            destination: "rue"
        }]
    },

    rue: {
        titre: "BRUIT INATTENDU",
        description: "Soudain, vous entendez un cri provenant de la maison voisine d'en face.",
        image: "./assets/img/maison_monstre_sanstitre.webp",
        video: "",
        son: "./assets/son/outside.mp3",
        son1: "./assets/son/atmo3.mp3",
        son2: "./assets/son/scream.mp3",
        boutons: [{
            titre: "Coup d'œil par le gazon",
            destination: "gazon"
        },
        {
            titre: "Cogner à la porte",
            destination: "porte1"
        },
        {
            titre: "Sonner à la porte",
            destination: "porte2"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        },



        ]
    },

    gazon: {
        titre: "REGARDEZ OÙ VOUS MARCHEZ",
        description: "Une racine vous agrippe le pied et vous mourez enseveli sous la terre.",
        image: "",
        video: "./assets/video/videoracine.mp4",
        son: "./assets/son/racinne.mp3",
        son1: "./assets/son/menscream.mp3",
        son2: "./assets/son/wind.mp3",
        boutons: [{
            titre: "Recommencer",
            destination: "menu"
        }]
    },

    porte1: {
        titre: "LA PORTE ?",
        description: "Vous décidez de cogner. La porte s'ouvre d'elle-même et vous remarquez qu'il fait sombre à l'intérieur.",
        image: "./assets/img/porte.PNG",
        video: "",
        son: "",
        son1: "./assets/son/door.mp3",
        son2: "./assets/son/knock.mp3",
        boutons: [{
            titre: "Entrer en utilisant un briquet",
            destination: "briquet"
        },
        {
            titre: "Entrer sans précaution",
            destination: "sansbriquet"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    porte2: {
        titre: "LA PORTE ?",
        description: "Vous décidez de sonner. La porte s'ouvre d'elle-même et vous remarquez qu'il fait sombre à l'intérieur.",
        image: "./assets/img/porte.PNG",
        video: "",
        son: "./assets/son/door.mp3",
        son1: "./assets/son/doorbell.mp3",
        son2: "",
        boutons: [{
            titre: "Entrer en utilisant une lumière",
            destination: "briquet"
        },
        {
            titre: "Entrer sans précaution",
            destination: "sansbriquet"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    sansbriquet: {
        titre: "IL FAIT SOMBRE !",
        description: "Vous entrez sans précaution. Un trou dans le sol se trouve à l'entrée du plancher, vous tombez et mourez de chute.",
        image: "./assets/img/tomber2.PNG",
        video: "",
        son: "./assets/son/atmo6.mp3",
        son1: "./assets/son/screamecho.mp3",
        son2: "./assets/son/bodyfall.mp3",
        boutons: [{
            titre: "Recommencer",
            destination: "menu"
        }]
    },

    briquet: {
        titre: "DANS LA GUEULE DU LOUP",
        description: "Vous entrez en esquivant un trou qui est à l'entrée du plancher. La porte se referme derrière vous. (Les cris s'intensifient)",
        image: "./assets/img/sousol.PNG",
        video: "",
        son: "./assets/son/breating.mp3",
        son1: "./assets/son/wood1.mp3",
        son2: "./assets/son/slam.mp3",
        boutons: [{
            titre: "Descendre les escaliers",
            destination: "escaliers"
        },
        {
            titre: "Prendre une clé sur une étagère",
            destination: "cle"
        },
        {
            titre: "Crier pour que la personne indique où elle se trouve",
            destination: "crier"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    crier: {
        titre: "CHUTT !",
        description: "La maison vous lance des pieux et vous tue.",
        image: "./assets/img/maison.PNG",
        video: "",
        son: "./assets/son/wind.mp3",
        son1: "./assets/son/menscream.mp3",
        son2: "./assets/son/pieu.mp3",
        boutons: [{
            titre: "Recommencer",
            destination: "menu"
        }]
    },

    escaliers: {
        titre: "TROUVÉ !",
        description: "Le voisin se trouvait derrière vous. Vous descendez plus vite pour le fuir.",
        image: "./assets/img/monter.PNG",
        video: "",
        son: "./assets/son/stairs.mp3",
        son1: "",
        son2: "",
        boutons: [{
            titre: "Continuer",
            destination: "hall"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    cle: {
        titre: "C'EST MIEUX QUE RIEN",
        description: "Vous trouvez une clé sur une étagère, ce sera peut-être utile. Le voisin marche derrière vous et vous prenez les escaliers pour le fuir.",
        image: "./assets/img/cle.PNG",
        video: "",
        son: "./assets/son/atmo7.mp3",
        son1: "./assets/son/key.mp3",
        son2: "",
        boutons: [{
            titre: "Continuer",
            destination: "hall"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    hall: {
        titre: "DEUX CHOIX",
        description: "Vous pensez avoir fui le voisin. Deux portes se trouvent devant vous.",
        image: "./assets/img/2portes.PNG",
        video: "",
        son: "./assets/son/wood1.mp3",
        son1: "",
        son2: "",
        boutons: [{
            titre: "Porte de droite",
            destination: "portedroite"
        },
        {
            titre: "Porte de gauche",
            destination: "portegauche"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    portedroite: {
        titre: "ÇA PUE",
        description: "Vous ouvrez la porte et un gaz toxique sort de la pièce et vous tue.",
        image: "./assets/img/gas.jpg",
        video: "",
        son: "./assets/son/gas.mp3",
        son1: "./assets/son/cough.mp3",
        son2: "",
        boutons: [{
            titre: "Recommencer",
            destination: "menu"
        }]
    },

    portegauche: {
        titre: "",
        description: "Vous ouvrez la porte et une fille se trouve dans une cage. Avez-vous la clé pour la sortir ?",
        image: "./assets/img/cadenat.PNG",
        video: "",
        son: "./assets/son/atmo4.mp3",
        son1: "./assets/son/wind.mp3",
        son2: "",
        boutons: [{
            titre: "Oui",
            destination: "fin"
        },
        {
            titre: "Non",
            destination: "sanscle"
        },
        {
            titre: "Recommencer",
            destination: "menu"
        }
        ]
    },

    fin: {
        titre: "BRAVO !",
        description: "Vous avez sauvé la fille en entrant dans la cage pour l'aider. La porte se referme contre vous...",
        image: "./assets/img/IMG_6547.PNG",
        video: "",
        son: "./assets/son/atmo3.mp3",
        son1: "./assets/son/locker.mp3",
        son2: "./assets/son/slam.mp3",
        boutons: [{
            titre: "Recommencer",
            destination: "menu"
        }]
    },

    sanscle: {
        titre: "PAS ASSEZ VITE !",
        description: "Le voisin de la maison vous a trouvé. Il vous attrape et vous tue.",
        image: "",
        video: "./assets/video/videovoisin.mp4",
        son: "./assets/son/atmo1.mp3",
        son1: "./assets/son/breating.mp3",
        son2: "",
        boutons: [{
            titre: "Recommencer",
            destination: "menu"
        }]
    },
};

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
    document.getElementById('chapterVideo').src = chapter.video;

    document.getElementById('chapterSon').src = chapter.son;
    document.getElementById('chapterSon2').src = chapter.son1;
    document.getElementById('chapterSon3').src = chapter.son2;


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

    if (chapterKey === "cle") {
        twist = true;
    }
}

function Sauvgarde(chapterKey, twistActivated) {
    localStorage.setItem('currentChapter', chapterKey);
    localStorage.setItem('twistActivated', twistActivated);
}


function Charger() {
    const currentChapter = localStorage.getItem('currentChapter');
    const twistActivated = localStorage.getItem('twistActivated');

    if (currentChapter) {
        updateChapterContent(currentChapter);
    }

    if (twistActivated === 'true') {
        twist = true;
    }
}

function reset() {
    localStorage.removeItem('currentChapter');
    localStorage.removeItem('twistActivated');
    updateChapterContent('menu');
}


function goToChapter(chapterKey) {
    const chapter = chapters[chapterKey];

    if (!chapter) {
        console.error("Le chapitre n'existe pas.");
        return;
    }

    chapter.boutons.forEach((bouton) => {
        console.log(bouton.titre + " (Destination : " + bouton.destination + ")");
    });

    Sauvgarde(chapterKey, twist);
    updateChapterContent(chapterKey);
}

document.getElementById('resetButton').addEventListener('click', reset);

window.addEventListener('load', Charger);

window.addEventListener('beforeunload', () => {
    Sauvgarde(currentChapter, twist);
});

// Ajoutez ces lignes dans votre code JavaScript
const muteCheckbox = document.getElementById('muteCheckbox');
const volumeUpIcon = document.getElementById('volumeUpIcon');
const volumeMuteIcon = document.getElementById('volumeMuteIcon');
const chapterSon = document.getElementById('chapterSon');
const chapterSon2 = document.getElementById('chapterSon2');
const chapterSon3 = document.getElementById('chapterSon3');

// Écoutez le changement d'état de la checkbox mute
muteCheckbox.addEventListener('change', toggleMute);

// Mettez à jour le statut du mute lors du changement d'état de la checkbox
function toggleMute() {
    const isMuted = muteCheckbox.checked;
    updateMuteStatus(isMuted);
}

// Mettez à jour le statut du mute et les icônes de volume
function updateMuteStatus(isMuted) {
    if (isMuted) {
        chapterSon.pause();
        chapterSon2.pause();
        chapterSon3.pause();
    } else {
        chapterSon.play();
        chapterSon2.play();
        chapterSon3.play();
    }

    // Enregistrez le statut du mute dans le localStorage
    localStorage.setItem('isMuted', isMuted);

    // Mettez à jour les icônes de volume
    updateVolumeIcons();
}

// Initialisez le mute lors du chargement de la page
function initializeMute() {
    // Utilisez le '|| false' pour définir une valeur par défaut de false si 'isMuted' est null
    const isMuted = localStorage.getItem('isMuted') === 'true' || false;
    muteCheckbox.checked = isMuted;
    updateMuteStatus(isMuted);
    updateVolumeIcons();
}

// Mettez à jour les icônes de volume
function updateVolumeIcons() {
    const isMuted = muteCheckbox.checked;
    volumeUpIcon.classList.toggle('hidden', isMuted);
    volumeMuteIcon.classList.toggle('hidden', !isMuted);
}




// Appelez cette fonction pour initialiser le mute lors du chargement de la page
initializeMute();
updateChapterContent("menu");















