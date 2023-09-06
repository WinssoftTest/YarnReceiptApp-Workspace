import { HttpClient, HttpClientModule } from "@angular/common/http";
 
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicSelectableModule } from "ionic-selectable";
import { AuthguradServiceService } from "./authguardservice.service";
import { AuthGuard } from "./guards/authguard.guard";
import { GridModule, PageService, ToolbarService, GridAllModule } from '@syncfusion/ej2-angular-grids';
 
 
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { EditService } from './edit.service';
 
 
import {   KanbanModule } from "@syncfusion/ej2-angular-kanban";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents: [],
 
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicSelectableModule,
    KanbanModule,CommonModule
  ],
  providers: [
    AuthGuard ,
    EditService,
    AuthguradServiceService,
    EditService, PageService, ToolbarService,GridAllModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
