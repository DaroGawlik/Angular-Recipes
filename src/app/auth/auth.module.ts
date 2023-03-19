import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthCompontent } from './auth.component';

@NgModule({
  declarations: [AuthCompontent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'auth', component: AuthCompontent }]),
    SharedModule,
  ],
})
export class AuthModule {}
