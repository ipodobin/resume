import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../shared/user.model';
import {SkillGroup} from '../shared/skill.group.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  @Input() user: User;
  skillGroups: SkillGroup[] = [];

  constructor() {
  }

  ngOnInit() {

    // init skillGroups
    this.skillGroups = [];
    for (const skill of this.user.skills) {
      let group = this.find(this.skillGroups, g => g.name === skill.group.name, this);
      if (group == null) {
        group = skill.group;
        group.skills = [];
        this.skillGroups.push(group);
      }
      group.skills.push(skill);
    }
    // sort skillGroups and skills
    for (const group of this.skillGroups) {
      group.skills = group.skills.sort((s1, s2) => {
        if (s1.level < s2.level) {
          return 1;
        }
        if (s1.level > s2.level) {
          return -1;
        }
        if (s1.level === s2.level) {
          return 0;
        }
      });
    }
    this.skillGroups = this.skillGroups.sort((g1, g2) => {
      if (g1.index < g2.index) {
        return -1;
      }
      if (g1.index > g2.index) {
        return 1;
      }
      if (g1.index === g2.index) {
        return 0;
      }
    });
  }

  private find(arr, test, ctx) {
    let result = null;
    arr.some(function (el, i) {
      return test.call(ctx, el, i, arr) ? ((result = el), true) : false;
    });
    return result;
  }

}
