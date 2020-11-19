import { element, render, routerBox, routerLink } from '@mkenzo_8/puffin'

import { NavBar } from '../src/index'
import HomeRoute from './routes/home'
import RadioGroupRoute from './routes/radio_groups'
import ButtonsRoute from './routes/buttons'
import TextRoute from './routes/text'
import CardRoute from './routes/card'
import InputRoute from './routes/input'
import TextAreaRoute from './routes/textarea'

const App = element({
	components:{
		NavBar,
		routerBox,
		routerLink,
		RadioGroupRoute,
		ButtonsRoute,
		TextRoute,
		CardRoute,
		HomeRoute,
		InputRoute,
		TextAreaRoute
	}
})`
	<div>
		<NavBar>
			<routerLink group="home" to="/home">Home</routerLink>
			<routerLink group="home" to="/radio_group">Radio group</routerLink>
			<routerLink group="home" to="/button">Button</routerLink>
			<routerLink group="home" to="/titlestext">Text</routerLink>
			<routerLink group="home" to="/card">Card</routerLink>
			<routerLink group="home" to="/input">Input</routerLink>
			<routerLink group="home" to="/textarea">TextArea</routerLink>
		</NavBar>
		<routerBox group="home" default="/home">
			<div from="/home">
				<HomeRoute/>
			</div>
			<div from="/radio_group">
				<RadioGroupRoute/>
			</div>
			<div from="/button">
				<ButtonsRoute/>
			</div>
			<div from="/titlestext">
				<TextRoute/>
			</div>
			<div from="/card">
				<CardRoute/>
			</div>
			<div from="/input">
				<InputRoute/>
			</div>
			<div from ="/textarea">
				<TextAreaRoute/>
			</div>
		</routerBox>
		
	</div>
`

render(App,document.getElementById("app"))