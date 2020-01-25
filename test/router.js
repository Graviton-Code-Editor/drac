import {puffin} from '@mkenzo_8/puffin'

import ButtonsRouter from './routes/buttons'
import HomeRouter from './routes/home'
import RadioGroupRouter from './routes/radio_groups'
import TextRouter from './routes/text'
import CardRouter from './routes/card'

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
    },
    {
        path:'/text', 
        component:TextRouter,
        title:'Text'
    },
    {
        path:'/card', 
        component:CardRouter,
        title:'Cards'
    }
  ])

  export default Router