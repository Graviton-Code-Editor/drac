import { element } from '@mkenzo_8/puffin'
import { Button } from '../../src/main'

function ButtonsRouter() {
	return element({
		components:{
			Button
		}
	})`
	<div>
		<Button>Button</Button>
		<Button>Another Button</Button>
		<Button class="disabled">Disabled</Button>
	</div>`
}

export default ButtonsRouter