import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './material-comp/buttons/buttons.component';
import { TypoComponent } from './material-comp/typo/typo.component';
import { IconComponent } from './material-comp/icon/icon.component';
import { BadgesComponent } from './material-comp/badges/badges.component';
import { SpinnerComponent } from './material-comp/spinner/spinner.component';
import { ToolbarComponent } from './material-comp/toolbar/toolbar.component';
import { SidenavComponent } from './material-comp/sidenav/sidenav.component';
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
import { SnackComponent } from './material-comp/snack/snack.component';
import { DialogComponent } from './material-comp/dialog/dialog.component';
import { DatatableComponent } from './material-comp/datatable/datatable.component';
import { VirtualScrollingComponent } from './material-comp/virtual-scrolling/virtual-scrolling.component';
import { CrudlistComponent } from './crud/crudlist/crudlist.component';

const routes: Routes = [
  {
    path:'typography',
    component: TypoComponent
  },
  {
    path:'button',
    component: ButtonsComponent
  },
  {
    path:'icon',
    component: IconComponent
  },
  {
    path:'badges',
    component: BadgesComponent
  },
  {
    path:'spinner',
    component: SpinnerComponent
  },
  {
    path:'toolbar',
    component: ToolbarComponent
  },
  {
    path:'sidenav',
    component: SidenavComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'grid',
    component: GridComponent
  },
  {
    path:'panel',
    component: PanelComponent
  },
  {
    path:'cards',
    component: CardsComponent
  },
  {
    path:'tabs',
    component: TabsComponent
  },
  {
    path:'stepper',
    component: StepperComponent
  },
  {
    path:'input',
    component: InputComponent
  },
  {
    path:'autocomplete',
    component: AutocompleteComponent
  },
  {
    path:'datepicker',
    component: DatepickerComponent
  },
  {
    path:'tooltip',
    component: TooltipComponent
  },
  {
    path:'snack',
    component: SnackComponent
  },
  {
    path:'dialog',
    component: DialogComponent
  },
  {
    path:'datatable',
    component: DatatableComponent
  },
  {
    path:'virtual-scrolling',
    component: VirtualScrollingComponent
  },
  {
    path:'crud-list',
    component: CrudlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
