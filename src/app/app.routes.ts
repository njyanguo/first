import { RouterModule } from '@angular/router';

import { AppComponent as appComponent} from './app.component';


export const appRoutes=[
	{
		path:'',
		redirectTo:'index',
		pathMatch:'full'
	},
	{
		path:'index',
		loadChildren: "./home/home.module#HomeModule"
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
]