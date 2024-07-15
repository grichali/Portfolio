import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Consultation de destinations de voyage',
      description: 'Ce site web offre une plateforme conviviale pour la consultation de destinations de voyage. Les utilisateurs peuvent explorer une variété de destinations et consulterdes avis d\'autres voyageurs.',
      techStack: 'HTML/CSS, JavaScript, PHP.',
      codeLink: 'https://github.com/grichali/Voyage',
      image:'images/Travel.jpg'
    },
    {
      title: 'Informatisation des Réservations de restaurants',
      description:'Ce système permet aux restaurants de gérer leurs réservations en ligne. Il permet aux clients de réserver une table en ligne, et de consulter les menus. Le système permet également aux restaurants de gérer leurs tables',
      techStack: 'Laravel, MySql, Postman.',
      image:'images/Restaurant.jpg',
      codeLink: 'https://github.com/grichali/Restauration'
    },
    {
      title: 'ResAPI pour la gestion des centres de soutien',
      description:
      'Ce projet permet aux étudiants de réserver des séances de tutorat et de consulter les avis sur les centres et les professeurs. De plus, les professeurs peuvent réserver des salles dans les centres, tandis que ces derniers peuvent gérer ces réservations et leurs salles correspondantes.',
      techStack: 'NestJs, MySql, Angular.',
      image:'images/Soutien.jpg',
      codeLink: 'https://github.com/grichali/Centre'
    },
    {
      title: 'Système de conduite autonome',
      description: 'Ce projet consiste à développer un système utilisant des réseaux de neurones convolutifs (CNN) pour une voiture autonome. Ce système a permis la prise de décision et la navigation en toute sécurité.',
      techStack: 'Python, OpenCv, Pandas, SKlearn, Flask.',
      image:'images/SelfDriving.jpg',
      codeLink: 'https://github.com/grichali/Self-Driving-Car'
    },
  ]
}
