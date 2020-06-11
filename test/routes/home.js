import { element } from '@mkenzo_8/puffin'
import { Text } from '../../src/main'

function HomeRoute(){
	return element({
		components:{
			Text
		}
	})`
	<div>
		<Text>This demo shows the implemented Drac's components in PuffinJS</Text>
	</div>`
}

export default HomeRoute
