import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    SignupComponent,
    SiginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {

}
