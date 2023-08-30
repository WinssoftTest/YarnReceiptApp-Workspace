import { Injectable } from '@angular/core';

@Injectable()
export class EditService {

  loggedIn = false;
  editLog: string[] = [];

  constructor() { }

  save(path: string, value: string) {
    this.editLog.push(`save: ${path}, ${value}`);
  }

}