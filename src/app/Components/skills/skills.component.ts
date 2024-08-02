import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { imgPath: 'images/html.png', name: 'Html' },
    { imgPath: 'images/css.png', name: 'Css' },
    { imgPath: 'images/bootstrap.png', name: 'Bootstrap' },
    { imgPath: 'images/net.png', name: '.Net' },
    { imgPath: 'images/angular.png', name: 'Angular' },
    { imgPath: 'images/laravel.png', name: 'Laravel' },
    { imgPath: 'images/nestjs.png', name: '.NestJS' },
    { imgPath: 'images/python.png', name: 'Python' },
    { imgPath: 'images/mysql.png', name: 'MySQL' },
    { imgPath: 'images/git.png', name: 'Git' },
  ];
}
