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
      title: 'Travel Destination Consultation',
      description: 'This website offers a user-friendly platform for consulting travel destinations. Users can explore a variety of destinations and read reviews from other travelers.',
      techStack: 'HTML/CSS, JavaScript, PHP.',
      codeLink: 'https://github.com/grichali/Voyage',
      image: 'images/Travel.jpg'
    },
    {
      title: 'Restaurant Reservation System',
      description: 'This system allows restaurants to manage their reservations online. It enables customers to book a table online and view menus. The system also allows restaurants to manage their tables.',
      techStack: 'Laravel, MySql, Postman.',
      codeLink: 'https://github.com/grichali/Restauration',
      image: 'images/Restaurant.jpg'
    },
    {
      title: 'API for Support Centers Management',
      description: 'This project allows students to book tutoring sessions and read reviews about centers and teachers. Additionally, teachers can book rooms in the centers, while the centers can manage these reservations and their corresponding rooms.',
      techStack: 'NestJs, MySql, Angular.',
      codeLink: 'https://github.com/grichali/Centre',
      image: 'images/Soutien.jpg'
    },
    {
      title: 'Autonomous Driving System',
      description: 'This project involves developing a system using Convolutional Neural Networks (CNN) for an autonomous car. This system enabled safe decision-making and navigation.',
      techStack: 'Python, OpenCv, Pandas, SKlearn, Flask.',
      codeLink: 'https://github.com/grichali/Self-Driving-Car',
      image: 'images/SelfDriving.jpg'
    }
  ];
}
