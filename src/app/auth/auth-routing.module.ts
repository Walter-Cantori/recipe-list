import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { SiginComponent } from "./sigin/sigin.component";

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SiginComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    [RouterModule]
  ]
})
export class AuthRoutingModule {}
