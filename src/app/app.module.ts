import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypoComponent } from './material-comp/typo/typo.component';
import { ButtonsComponent } from './material-comp/buttons/buttons.component';
import { IconComponent } from './material-comp/icon/icon.component';
import { BadgesComponent } from './material-comp/badges/badges.component';
import { SpinnerComponent } from './material-comp/spinner/spinner.component';
import { ToolbarComponent } from './material-comp/toolbar/toolbar.component';
import { SidenavComponent } from './material-comp/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './material-comp/menu/menu.component';
import { ListComponent } from './material-comp/list/list.component';
import { GridComponent } from './material-comp/grid/grid.component';
import { PanelComponent } from './material-comp/panel/panel.component';
import { CardsComponent } from './material-comp/cards/cards.component';
import { TabsComponent } from './material-comp/tabs/tabs.component';
import { StepperComponent } from './material-comp/stepper/stepper.component';
import { InputComponent } from './material-comp/input/input.component';
import { AutocompleteComponent } from './material-comp/autocomplete/autocomplete.component';
import { DatepickerComponent } from './material-comp/datepicker/datepicker.component';
import { TooltipComponent } from './material-comp/tooltip/tooltip.component';
import { SnackComponent, CustomSnackBarComponent } from './material-comp/snack/snack.component';
import { DialogComponent } from './material-comp/dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DatatableComponent } from './material-comp/datatable/datatable.component';
import { VirtualScrollingComponent } from './material-comp/virtual-scrolling/virtual-scrolling.component';
import { CrudlistComponent } from './crud/crudlist/crudlist.component';
import { CruddialogComponent } from './crud/cruddialog/cruddialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TypoComponent,
    ButtonsComponent,
    IconComponent,
    BadgesComponent,
    SpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    PanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    AutocompleteComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackComponent,
    CustomSnackBarComponent,
    DialogComponent,
    DialogExampleComponent,
    DatatableComponent,
    VirtualScrollingComponent,
    CrudlistComponent,
    CruddialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
