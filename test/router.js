import {puffin} from '@mkenzo_8/puffin'

import ButtonsRouter from './routes/buttons'
import HomeRouter from './routes/home'
import RadioGroupRouter from './routes/radio_groups'

const Router = new puffin.router([
    {
        path:'/', 
        component:HomeRouter,
        title:'Home'
    },
    {
        path:'/buttons', 
        component:ButtonsRouter,
        title:'Buttons'
    },
    {
        path:'/radio_group', 
        component:RadioGroupRouter,
        title:'Radio group'
    }
  ])

  export default Router