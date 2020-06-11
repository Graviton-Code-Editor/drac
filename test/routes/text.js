import { element } from '@mkenzo_8/puffin'
import { Text , Titles } from '../../src/main'

function TextRoute(){
	return element({
		components:{
			Text,
			H1:Titles.h1,
			H2:Titles.h2,
			H3:Titles.h3,
			H4:Titles.h4,
			H5:Titles.h5,
			H6:Titles.h6
		}
	})`
	<div>
		<H1>This is an H1</H1>
		<Text>This is a text</Text>
		<H2>This is an H2</H2>
		<Text>This is a text</Text>
		<H3>This is an H3</H3>
		<Text>This is a text</Text>
		<H4>This is an H4</H4>
		<Text>This is a text</Text>
		<H5>This is an H5</H5>
		<Text>This is a text</Text>
		<H6>This is an H6</H6>
		<Text>This is a text</Text>
	</div>`
	}

export default TextRoute
