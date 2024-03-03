import { Injectable } from '@angular/core';
import { IProject } from '../interface/project';
import { ApiService } from '../services/Api.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: IProject[] = [
    {
      _id: 'String',
      title: 'String',
      description: 'String',
      category: 'String',
      designersOffers: [],
      expectedPrice: 'String',
      // enum: [
      //   '25 - 50$',
      //   '50 - 100$',
      //   '100 - 250$',
      //   '250 - 500$',
      //   '500 - 1000$',
      //   '1000 - 2500$',
      //   '2500 -5000$',
      //   '5000 - 10000$'
      // ],
      expectedTime: 0,
      status: 'String',
      createdBy: 'String',
      offer: [],
      // enum: ['open', 'closed', 'completed'],
      file: 'String',
      updatedBy: 'String',
    },
    {
      _id: 'String',
      title: 'String',
      description: 'String',
      category: 'String',
      designersOffers: [],
      expectedPrice: 'String',
      // enum: [
      //   '25 - 50$',
      //   '50 - 100$',
      //   '100 - 250$',
      //   '250 - 500$',
      //   '500 - 1000$',
      //   '1000 - 2500$',
      //   '2500 -5000$',
      //   '5000 - 10000$'
      // ],
      expectedTime: 0,
      status: 'String',
      createdBy: 'String',
      offer: [],
      // enum: ['open', 'closed', 'completed'],
      file: 'String',
      updatedBy: 'String',
    },
  ];
  constructor(private apiServ: ApiService) {}
  getAllProjects() {
    this.apiServ.getProjects().subscribe({
      next: (response) => {
        console.log(response);
        this.projects = response.data
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteProject(id: String) {
    alert(`${id} => deleted`);
  }
}
