import projet1 from './assets/uber.png'
import projet2 from './assets/veepee.png'
import projet3 from './assets/red.jpg'
import projet4 from './assets/sephora.jpg'
import {
    faLaptop,
    faPeopleGroup,
    faLaptopCode,
    faCalendar,
    faBullhorn,
    faCamera,
    faChalkboardUser, faChair
} from '@fortawesome/free-solid-svg-icons'

const Data = {
    service : [
        {
            icon: faLaptop,
            title: "Digital marketing et communication"
        },
        {
            icon: faPeopleGroup,
            title: "Relation client digital"
        },
        {
            icon: faLaptopCode,
            title: "Developpement web et mobile"
        },
        {
            icon: faChair,
            title: "Consulting et accompagement"
        },
        {
            icon: faChalkboardUser,
            title: "Coaching et formation"
        },
        {
            icon: faCamera,
            title: "Production vidéo et shooting"
        },
        {
            icon: faBullhorn,
            title: "Communication d'influence"
        },
        {
            icon: faCalendar,
            title: "Digital events"
        },
    ],
    realisations : [
        {
            url: projet1,
            title : "Projet 1" ,
            description: "Refonte du site web"
        },
        {
            url: projet2,
            title : "Projet 2",
            description: "Création de l'application mobile"
        },
        {
            url: projet3,
            title : "Projet 3",
            description: "Réalisation du site web"
        },
        {
            url: projet4,
            title : "Projet 4",
            description: "Refonte de l'interface utilisateur"
        },
    ]
}
export default Data;