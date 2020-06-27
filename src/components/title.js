import { element,style } from '@mkenzo_8/puffin'

const h1Wrapper = style`
	&{
		--textColor:black;
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		margin:3px;
		margin-bottom:10px; 
		padding:5px;
		color:var(--puffinTextColor,var(--textColor));
	}
`
const h2Wrapper = style`
	&{
		--textColor:black;
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		margin:3px;
		margin-bottom:8px; 
		padding:5px;
		color:var(--puffinTextColor,var(--textColor));
	}
`
const h3Wrapper = style`
	&{
		--textColor:black;
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		margin:3px;
		margin-bottom:6px; 
		padding:5px;
		color:var(--puffinTextColor,var(--textColor));
	}
`

const h4Wrapper = style`
	&{
		--textColor:black;
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		margin:3px;
		margin-bottom:6px; 
		padding:5px;
		color:var(--puffinTextColor,var(--textColor));
	}
`
const h5Wrapper = style`
	&{
		--textColor:black;
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		margin:3px;
		margin-bottom:6px; 
		padding:5px;
		color:var(--puffinTextColor,var(--textColor));
	}
`
const h6Wrapper = style`
	&{
		--textColor:black;
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		margin:3px;
		margin-bottom:6px; 
		padding:5px;
		color:var(--puffinTextColor,var(--textColor));
	}
`
function h1(){
	return element`<h1 class="${h1Wrapper}"/>`
}
function h2(){
	return element`<h2 class="${h2Wrapper}"/>`
}
function h3(){
	return element`<h3 class="${h3Wrapper}"/>`
}
function h4(){
	return element`<h4 class="${h4Wrapper}"/>`
}
function h5(){
	return element`<h5 class="${h5Wrapper}"/>`
}
function h6(){
	return element`<h6 class="${h6Wrapper}"/>`
}

const Titles = {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6
}
export default Titles