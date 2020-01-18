import {puffin} from '@mkenzo_8/puffin'
import Router from './router'

const { Button, RadioGroup, NavBar} = require('../src/main')

const App = puffin.element(`
    <div>
        <NavBar>
            <routerLink class="active" path="/">Home</routerLink>
            <routerLink path="/buttons">Buttons</routerLink>
            <routerLink path="/radio_group">Radio Groups</routerLink>
            <routerLink path="/text">Text</routerLink>
        </NavBar>
        <routerBox/>
    </div>
`,{
    methods:{
        radioSelected(e){
            console.log(e.detail.target)
        }
    },
    components:{
        Button,
        RadioGroup,
        NavBar,
        routerBox:Router.box,
        routerLink:Router.link
    }
})


puffin.render(App,document.getElementById("app"))