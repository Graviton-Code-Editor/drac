import { element } from '@mkenzo_8/puffin'
import { Input } from '../../src/index'

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
