import { Component, OnInit } from '@angular/core';
import { IProject } from '../../interface/project';
import { ProjectsService } from '../../services/projects.service';
import { ApiService } from '../../services/Api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: IProject[] = [];
  project: IProject | undefined;
  projectID: String = '';
  constructor(
    private projectServ: ProjectsService,
    private ApiServ: ApiService,
    private router: Router
  ) {
    this.ApiServ.getProjects().subscribe({
      next: (response) => {
        console.log(response);
        this.projects = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  showItem(item: IProject) {
    this.project = item;
    this.projectID = item._id;
  }
  deleteItem(id: String) {
    // this.projectServ.deleteProject(id);
    this.ApiServ.deleteProject(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  searchItems(search: string) {
    this.project = this.projects.find(
      (pro) => pro._id == search || pro.title.includes(search)
    );
    // this.projects = this.projects.filter(pro=>pro.createdBy == id)
    console.log(this.project);
  }
  goToOffers(id?: String) {
    this.router.navigateByUrl(`/offers/${id}`);
  }
}
