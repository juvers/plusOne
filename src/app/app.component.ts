import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelsService } from './models.service';
import { Model } from './models';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  models: Model[]=[];
  selectedModel: Model;
  @ViewChild('sidenav') sidenav: MatSidenavModule;


  constructor(private modelsService: ModelsService){

  }
  ngOnInit(){
      this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
      // 1. set selected models
          // we select the model by creating a new property selectedModel within APpComponent
          this.selectedModel= model;
      // 2. open sidenav
          // In order to open the side nav it has to be referenced in component. Using ViewChild decorator will query the component's template from within the component. Firstly we create a local template variable #sidenav in the sidenav then we connect the #sidenav in template using ViewChild as above
          this.sidenav.open();
  }
}
