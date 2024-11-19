import { NgModule } from '@angular/core';
import { NbActionsModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    NbCheckboxModule,   
    NbAlertModule
  ],
  declarations: [
    LoginComponent
      ],
})
export class LoginModule {
}
