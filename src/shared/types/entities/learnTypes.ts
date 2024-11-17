import { type IdNameCodeTimeCreate } from 'shared/types/entities/type';
import { type LevelTp } from 'shared/types/entities/todoTypes';

export interface LearnTypeTp extends IdNameCodeTimeCreate {}

export interface LearnDeprecatedTp extends IdNameCodeTimeCreate {}
export interface LearnStatusTp extends IdNameCodeTimeCreate {}
export interface LearnTagTp extends IdNameCodeTimeCreate {}
export interface LearnMasteringTp extends IdNameCodeTimeCreate {
  interest: number;
  isDeleted: boolean;
}

// resouce
export interface LearnResourceTp extends Omit<IdNameCodeTimeCreate, 'code'> {
  fullName: string;
  type: LearnTypeTp;
  key: string;
  link: string;
  content: string;
  priority: LevelTp;
  status: LearnStatusTp;
  tagList: LearnTagTp;
  mastering: LearnMasteringTp;
}

// repeat
export interface RepeatTp {
  readonly id?: string;
  name: string;
  isRepeated: boolean;
  type?: string;
  link?: string;
}

export interface RepeatLearnTp extends Pick<IdNameCodeTimeCreate, 'id'> {
  timeRepeat?: string;
  repeatList: RepeatTp[];
}

// tracker

export interface HabitTp {
  id?: string;
  name: string;
  progress: number;
  percent: number;
  progressLevel: LevelTp;
  effort: LevelTp;
  timeStart: string;
  timeDo: string;
}

export interface ResourceAnswerTP {
  key: string;
  indexDate: string;
  title: string;
}

export interface ResourceTP {
  key: string;
  description: string;
  name: string;
  link: string;
}

// VvV
export interface SourceLinkTvP {
  _id: string;
  name: string;
  url: string;
  img: string;
}

export interface TagTpV {
  _id: string;
  name: string;
}

export interface PriorityTvP {
  _id: string;
  name: string;
  level: number;
}

export interface StatusTvP {
  _id: string;
  name: string;
}

export interface ResourceTvP {
  _id: string;
  name: string;
  description: string;
  link: string;
  source?: SourceLinkTvP;
  img: string;
  tag: TagTpV[];
  priority: PriorityTvP;
  usageCount: number;
  status: StatusTvP;
  relatedLinks?: SourceLinkTvP[];
  likeThanCLink?: SourceLinkTvP[];
}
