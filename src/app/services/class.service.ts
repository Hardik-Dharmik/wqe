import { Injectable } from '@angular/core';

export type Class = {
  standard: string;
  type: string;
  description: string;
  subjects: string[];
  icon?: string;
  iconBgColor?: string;
  imgUrl?: string;
};

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  getAllClassesSummary() {

  }
}
