import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      {
        name: 'PHP, Mezzio-Swoole (Zend Expressive)',
        percent: 90,
        remark: 'very-good',
      },
      { name: 'HTML, CSS', percent: 70, remark: 'very-good' },
      { name: 'C#, ASP.NET API, ASP.NET MVC', percent: 60, remark: 'good' },
      { name: 'Javascript, Angular', percent: 60, remark: 'good' },
      { name: 'Python', percent: 60, remark: 'good' },
      { name: 'Swagger Open Api', percent: 70, remark: 'very-good' },
    ],
    tools: [
      { name: 'Git', percent: 90, remark: 'excellent' },
      { name: 'Office', percent: 90, remark: 'excellent' },
      { name: 'Linux, Windows, Mac', percent: 70, remark: 'very-good' },
      { name: 'MySql, MySqlite, MongoDB', percent: 70, remark: 'very-good' },
      { name: 'Docker', percent: 60, remark: 'good' },
    ],
    methodologies: [
      { name: 'Scrum', percent: 70, remark: 'very-good' },
      { name: 'Design Thinking', percent: 70, remark: 'very-good' },
      { name: 'CI/CD', percent: 70, remark: 'very-good' },
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {}
}
