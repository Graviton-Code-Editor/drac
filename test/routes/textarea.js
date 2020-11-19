import { element } from '@mkenzo_8/puffin'
import { TextArea } from '../../src/index'

function TextAreaRoute(){
	return element({
		components:{
			TextArea
		}
	})`
	<div>
		<TextArea>Hello World</TextArea>
	</div>`
	}

export default TextAreaRoute
