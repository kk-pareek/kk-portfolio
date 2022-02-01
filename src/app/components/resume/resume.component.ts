import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  education:boolean = true;
  experience:boolean = false;
  skills:boolean = false;
  interests:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleResumeComponentRender(componentName:string): void {
    if(componentName === "education") {
      this.education = true;
      this.experience = false;
      this.skills = false;
      this.interests = false;
    }
    if(componentName === "experience") {
      this.education = false;
      this.experience = true;
      this.skills = false;
      this.interests = false;
    }
    if(componentName === "skills") {
      this.education = false;
      this.experience = false;
      this.skills = true;
      this.interests = false;
    }
    if(componentName === "interests") {
      this.education = false;
      this.experience = false;
      this.skills = false;
      this.interests = true;
    }
  }

}
