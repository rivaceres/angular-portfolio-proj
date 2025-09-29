import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

@Input() showTechStack: boolean = true;

  techRow2 = [
    'PS.png',
    'illustrator.png',
    'systemeio.png',
    'toon.png',
    'csp.png',
    'krita.png',
    'canva.png',
    'notion.png',
    'trello.png',
  ];

  techIcons = [
    { src: 'assets/angular.png', alt: 'Angular' },
    { src: 'assets/react.png', alt: 'React' },
    { src: 'assets/html5.png', alt: 'HTML' },
    { src: 'assets/bootstrap.png', alt: 'Bootstrap' },
    { src: 'assets/prettier.png', alt: 'Prettier' },
    { src: 'assets/python.png', alt: 'Python' },
    { src: 'assets/git.png', alt: 'Git' },
    { src: 'assets/postman.png', alt: 'Postman' },
    { src: 'assets/azure.png', alt: 'azure' },
    { src: 'assets/jira.png', alt: 'jira' },
    { src: 'assets/wp.png', alt: 'Wordpress' },
    { src: 'assets/systemeio.png', alt: 'Systeme.IO' },
    { src: 'assets/figma.png', alt: 'Figma' },
    { src: 'assets/relume.png', alt: 'Relume' },
    { src: 'assets/PS.png', alt: 'Photoshop' },
    { src: 'assets/illustrator.png', alt: 'Illustrator' },
    { src: 'assets/notion.png', alt: 'Notion' },
    { src: 'assets/trello.png', alt: 'Trello' },
    { src: 'assets/toon.png', alt: 'ToonBoom' },
    { src: 'assets/csp.png', alt: 'Clip Studio Paint' },
    { src: 'assets/krita.png', alt: 'Krita' },
    { src: 'assets/canva.png', alt: 'Canva' },
  ];
}
