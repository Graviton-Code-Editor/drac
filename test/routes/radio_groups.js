import { element } from '@mkenzo_8/puffin'
import { RadioGroup, Card } from '../../src/index'

function RadioGroupRoute () {
	function radioSelected(e){
		console.log(e.detail)
	}
	return element({
		components:{
			RadioGroup
		}
	})`
		<div>
			<RadioGroup :radioSelected="${radioSelected}" direction="horizontally" options="${[
				'Option 1',
				{
					label: 'Option 2 (default)',
					checked: true,
					hiddenRadio: true,
					key: 'test'
				},
				'Option 3',
				() => element({components: { Card }})`<Card>test</Card>`,
				{
					component: () => element({components: { Card }})`<Card>test</Card>`,
					styled: false,
					hiddenRadio: true,
					key: 'test2'
				}
			]}">
			</RadioGroup>
		</div>`
}

export default RadioGroupRoute