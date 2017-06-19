import { RouterModule } from '@angular/router';

import { HomeComponent as homeComponent } from '../home.component';

export const homeRoutes=[
	{
		path:'',
        component:homeComponent//,
        /*children:[{
            path:'',
            loadChildren:'../post/post.module#PostModule'
        }]*/
	}


]