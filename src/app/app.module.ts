import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { AddReactiveComponent } from './add-reactive/add-reactive.component';
import { ShowsearchedComponent } from './showsearched/showsearched.component';
import { UpdateComponent } from './update/update.component';
import { TxtchangeDirective } from './txtchange.directive';
import { RainbowDirective } from './rainbow.directive';
import { MultiplierPipe } from './multiplier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    SearchcustomerComponent,
    AddReactiveComponent,
    ShowsearchedComponent,
    UpdateComponent,
    TxtchangeDirective,
    RainbowDirective,
    MultiplierPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
