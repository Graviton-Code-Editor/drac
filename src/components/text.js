import  { element, style } from '@mkenzo_8/puffin'

const TextWrapper = style`
	&{
	--accentColor:#0066FF;
	--secondaryColor:#EFEFEF;
	--textColor:black;
	--font:Montserrat, sans-serif;
	font-family:var(--puffinFont,var(--font));
	margin:3px;
	padding:5px;
	color:var(--puffinTextColor,var(--textColor));
	font-weight:normal;
	font-size:15px;
	}
`

function Text(){
	return element`<p class="${TextWrapper}"></p>`
}

export default Text