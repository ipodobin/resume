import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/skill.model';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.css']
})
export class SkillLevelComponent implements OnInit {

  @Input() skill: Skill;
  constructor() { }

  ngOnInit() {
  }

  getTransformValue() {
    let rotate = this.skill.level * 360 / 100;
    return 'rotate(' + rotate + 'deg)';
  }

  getSkillLevelClass() {
    return {
      'over50': this.skill.level > 50
    };
  }

}
