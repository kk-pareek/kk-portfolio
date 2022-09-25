import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  education: boolean = true;
  experience: boolean = false;
  skills: boolean = false;
  interests: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleResumeComponentRender(componentName: string): void {
    if (componentName === "education") {
      this.education = true;
      this.experience = false;
      this.skills = false;
      this.interests = false;
    }
    if (componentName === "experience") {
      this.education = false;
      this.experience = true;
      this.skills = false;
      this.interests = false;
    }
    if (componentName === "skills") {
      this.education = false;
      this.experience = false;
      this.skills = true;
      this.interests = false;
    }
    if (componentName === "interests") {
      this.education = false;
      this.experience = false;
      this.skills = false;
      this.interests = true;
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1wm6fqaSqbQIn60ZlIN9_hLIV0tBFhECD/view?usp=sharing');
    link.setAttribute('download', `Krishan Kumar Pareek.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

  }
}
