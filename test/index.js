import { element, render, routerBox, routerLink } from '@mkenzo_8/puffin'

const { NavBar} = require('../src/main')

import HomeRoute from './routes/home'
import RadioGroupRoute from './routes/radio_groups'
import ButtonsRoute from './routes/buttons'
import TextRoute from './routes/text'
import CardRoute from './routes/card'

const App = element({
	components:{
		NavBar,
		routerBox,
		routerLink,
		RadioGroupRoute,
		ButtonsRoute,
		TextRoute,
		CardRoute,
		HomeRoute
	}
})`
	<div>
		<NavBar>
			<routerLink group="home" to="/home">Home</routerLink>
			<routerLink group="home" to="/radio_group">Radio group</routerLink>
			<routerLink group="home" to="/button">Button</routerLink>
			<routerLink group="home" to="/text">Text</routerLink>
			<routerLink group="home" to="/card">Card</routerLink>
		</NavBar>
		<routerBox group="home">
			<div from="/home">
				<HomeRoute/>
			</div>
			<div from="/radio_group">
				<RadioGroupRoute/>
			</div>
			<div from="/button">
				<ButtonsRoute/>
			</div>
			<div from="/text">
				<TextRoute/>
			</div>
			<div from="/card">
				<CardRoute/>
			</div>
		</routerBox>
		
	</div>
`

render(App,document.getElementById("app"))