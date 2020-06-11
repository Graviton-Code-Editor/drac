import { element } from '@mkenzo_8/puffin'
import { Input } from '../../src/main'

function InputRoute(){
	return element({
		components:{
			Input
		}
	})`
	<div>
		<Input value="test">test</Input>
	</div>`
	}

export default InputRoute
