import { Injectable } from '@angular/core';

interface Experiences {
  titre: string;
  entreprise: string;
  client: string;
  preembauche: string;
  adresse: string;
  realisations: Array<string>;
  context: Array<string>;
  langages: Array<string>;
  outils: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private experienceData: Array<Experiences>;

  constructor() {
    this.experienceData = [
      {
        titre: 'Développeur Fullstack',
        entreprise: 'LR Technologies Sud Ouest',
        client: 'A.GE.D.I',
        preembauche: null,
        adresse: 'Blagnac (31)',
        realisations: [
          'Maintenance corrective et évolutive sur des applications déstinées aux maries et communautés de communes',
          'Evolution d\'un outil interne permettant la création d\'une GED'
        ],
        context: [
          'Assistance Technique déplacé dans les locaux de LRTSO. Le client étant basé à Aurillac',
          'équipe de 3 personnes coté SSII, une trentaine de persoones coté client',
          'Sous la responsabilité du DSI du client'
        ],
        langages: [
          'AngularJS',
          'Java8',
          'Spring',
          'Hibernate',
          'PHP 5.6',
          'Zend 1',
          'HTML5',
          'CSS3',
          'MySql',
          'PostfreSql'
        ],
        outils: [
          'Debian',
          'WebStorm',
          'IntelliJ',
          'PhpStorm',
          'DBeaver',
          'Git',
        ]
      },
      {
        titre: 'Développeur fullstack',
        entreprise: 'GIP Mipih',
        client: null,
        preembauche: 'ConsortNT',
        adresse: 'Toulouse (31)',
        realisations: [
          'Réalisation de la partie front des applications en AngularJS 1.7 + TypeScript',
          'Réalisation de composants (formulaire, carousel, etc.) utilisés par les différentes applications métier en AngularJS 1.7 + TypeScript',
          'Réalisation d\'un POC en Angular 7',
          'Intéfration  continue : Mise en place et configuration sous TFS + Jenkins',
          'Déploiement de nos applications sur serveur IIS',
          'Définition de l’architecture applicative',
          'Mise en place de tests e2e avec protractor',
          'Mise en place de tests unitaires avec Karma et Jasmine',
          'Définition de l’ergonomie et du design des applications',
          'Présentations de Angular7, Git, Flex, test unitaires, etc à l’équipe de développeur.'
        ],
        context: [
          'Equipe de 10 personnes',
          'Agile Srcum',
        ],
        langages: [
          'AngularJs',
          'Angular',
          '.net',
          'HTML5',
          'CSS3',
        ],
        outils: [
          'windows10',
          'WebStorm',
          'VisualStudio',
          'Filenet',
          'Git',
        ]
      },
      {
        titre: 'Développeur fullstack',
        entreprise: 'Gibmedia',
        client: null,
        preembauche: 'Ausy',
        adresse: 'Toulouse (31)',
        realisations: [
          'Réalisations et maintenance des différents sites utilisant les différentes solutions de micro-paiment développées par l\'entreprise',
          'Configuration des solutions de micro-paiement',
          'Déploiement des dites',
          'Configuration des Vhosts',
        ],
        context: [
          'Equipe de 10 personnes (5 développeurs et 5 chefs de produit)',
          'Cyvle en V',
        ],
        langages: [
          'Symfony 1 & 2',
          'AngularJs',
          'Less',
          'HTML5',
          'CSS3',
          'Jquery',
        ],
        outils: [
          'WebStorm',
          'PhpStorm',
          'Photoshop',
          'Meteor',
          'Git',
        ]
      },
      {
        titre: 'Développeur Front',
        entreprise: 'Orange Application for Businness',
        client: 'GIP Agora',
        preembauche: null,
        adresse: 'Montauban (82)',
        realisations: [
          'Application single page pour la gestion de la situation socio-professionnelle des adhérants de la MSA',
        ],
        context: [
          'Equipe de 5 personnes',
          'Agile Scrum',
        ],
        langages: [
          'Backbone',
          'Underscore',
          'Mustache',
          'Jquery',
          'HTML5',
          'CSS3',
        ],
        outils: [
          'Windows 7',
          'WebStorm',
          'Git',
        ]
      },
      {
        titre: 'Développeur Fullstack',
        entreprise: 'Orange Application for Businness',
        client: 'Orange Portail',
        preembauche: null,
        adresse: 'Sophia Antipolis (06)',
        realisations: [
          'Réalisation de divers modules pour les moteurs de recherches web',
          'Réalisation des différents bacloffice',
          'Réalisation du front du moteur de recherche international & gestion des traductions',
          'Création de l\'API destiné au moteur de recherche vidéo',
        ],
        context: [
          'Eqipe de 12 personnes',
          'cycle en V',
        ],
        langages: [
          'Zend 1',
          'Jquery',
          'HTML5',
          'CSS3',
          'MySql',
        ],
        outils: [
          'Windows 7',
          'NetBeans',
          'Bazaar',
          'Jenkins',
        ]
      },
      {
        titre: 'Développeur Fullstack',
        entreprise: 'Marine Nationale',
        client: null,
        preembauche: null,
        adresse: 'Toulon (83)',
        realisations: [
          'Etude du besoin',
          'Conception',
          'Redactions des spécifications techniques',
          'Realisation du frontoffice et cu backoffice pour la gestion des avaries des SNA',
        ],
        context: [
          'projet dolo',
          'cycle en V',
        ],
        langages: [
          'Zend 1',
          'MySql',
          'Javascript',
          'HTML5',
          'CSS3',
        ],
        outils: [
          'Xindows XP',
          'Netbeans',
        ]
      },
      {
        titre: 'Développeur Fullstack',
        entreprise: 'Projet personnel',
        client: null,
        preembauche: null,
        adresse: null,
        realisations: [
          'Réalisation du front de mon CV',
          'Réalisation de l\'API REST',
          'Réalisation de la base de données',
          'Réalisation du backoffice pour gérer la base de données',
        ],
        context: [
          'projet personnel',
        ],
        langages: [
          'Angular',
          'Typescript',
          'Express',
          'TypeORM',
          'HTML5',
          'CSS3',
        ],
        outils: [
          'Debian',
          'Webstorm',
          'DBeaver',
        ]
      }
    ];
  }

  getExperience(id: number) {
    return this.experienceData[id];
  }
}
