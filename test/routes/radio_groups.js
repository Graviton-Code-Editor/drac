import { element } from '@mkenzo_8/puffin'
import { RadioGroup} from '../../src/main'

function RadioGroupRoute () {
	function radioSelected(e){
		console.log(e.detail.target)
	}
	return element({
		components:{
			RadioGroup
		}
	})`
		<div>
			<RadioGroup :radioSelected="${radioSelected}">
				<label>Option 1</label>
				<label checked="true">Option 2 (default)</label>
				<label>Option 3</label>
				<label styled="false">Not styled radio</label>
			</RadioGroup>
		</div>`
}

export default RadioGroupRoute