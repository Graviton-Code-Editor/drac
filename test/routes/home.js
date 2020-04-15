import { element } from '@mkenzo_8/puffin'

const { Text } = require('../../src/main')

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
