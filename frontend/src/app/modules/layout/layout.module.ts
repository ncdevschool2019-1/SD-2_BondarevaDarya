import { NgModule } from "@angular/core";
import {BillingDetailsViewComponent} from "./components/billing-details/billing-details-view.component";
import {NotFoundComponent} from "./components/404/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {BillingAccountModule} from "../billing-account/billing-account.module";
import {HeaderModule} from "../header/header.module";
import {RouterModule} from "@angular/router";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {TasksService} from "../../services/tasks.service";

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    BillingDetailsViewComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BillingAccountModule,
    HeaderModule,
    RouterModule
  ],
  providers: [TasksService],
  exports: [HomeComponent, NotFoundComponent, BillingDetailsViewComponent]
})
export class LayoutModule {}
