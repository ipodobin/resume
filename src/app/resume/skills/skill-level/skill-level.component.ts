import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/skill.model';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.css']
})
export class SkillLevelComponent implements OnInit {

  @Input() skill: Skill;
  @Input() num: number;
  range: number[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.num; i++) {
      this.range.push(i);
    }
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

  getSkillLevelPartClass(num: number, max: number = 5) {
    let fill = 100 * (num - 1) / max <= this.skill.level;
    return {
      'ui-skill-level-part-fill': fill
    };
  }

}
