export type SkillID = string;

export type Skill = {
  level: number;
  icon?: string;
  image?: string;
  desc?: string;
};

export type SkillMap<Keys extends SkillID> = { [key in Keys]: Skill };

export type Experience<MySkills extends SkillID> = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: MySkills[];
};

export type Education<MySkills extends SkillID> = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: MySkills[];
};

export type Project<MySkills extends SkillID> = {
  name: string;
  description: string;
  image: string;
  url: string;
  skills: MySkills[];
};

export type Portfolio<MySkills extends SkillID> = {
  projects: Project<MySkills>[];
};

export type Person = {
  Name: string;
  Age: string;
  Contact: string;
  Description: string;
};

export type Resume<SkillList extends SkillID> = Person & {
  Skills: SkillMap<SkillList>;
  Portfolio: Portfolio<SkillList>;
  Education: Education<SkillList>[];
  Experience: Experience<SkillList>[];
};
