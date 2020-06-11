import { element } from '@mkenzo_8/puffin'
import { Card } from '../../src/main'

function CardRoute(){
	return element({
		components:{
			Card
		}
	})`
		<div>
			<Card>
				<h2>Card 1</h2>
				<p>Small text</p>
			</Card>
			<Card>
				<h2>Card 2</h2>
				<p>Small text</p>
			</Card>
		</div>
	`
}

export default CardRoute