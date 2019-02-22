import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Skill} from '../../shared/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;
  STRONG_LEVEL = 80;
  KNOWLEDGEABLE_LEVEL = 60;

  constructor() {
  }

  ngOnInit() {
  }


  getSkillClass() {
    return {
      'strong': this.skill.level >= this.STRONG_LEVEL,
      'regular': this.skill.level < this.STRONG_LEVEL && this.skill.level >= this.KNOWLEDGEABLE_LEVEL
    };
  }

}
