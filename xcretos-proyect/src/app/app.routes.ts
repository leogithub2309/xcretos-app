import { Routes } from '@angular/router';
import { MenuStore } from './components/menu-store/menu-store';
import { VirtualStore } from './components/virtual-store/virtual-store';

export const routes: Routes = [
    {path: 'virtual-store', component: VirtualStore},
    {path: '', redirectTo: 'virtual-store', pathMatch: 'full'}
];
