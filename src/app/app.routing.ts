import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from './app.module';

const routes:Routes = [
     {path: '', redirectTo: '/home', pathMatch: 'full'},
     {path: 'home', component: AppModule}
]

@NgModule({
    imports:[

    ],
    exports: [
        RouterModule
    ]

})

export class RoutingModule{

}