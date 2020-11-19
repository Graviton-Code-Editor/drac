import  { style, element } from '@mkenzo_8/puffin'

const TextAreaWrapper = style`
	&{
		--font:Montserrat, sans-serif;
		--textAreaBackground:#EFEFEF;
		--disabledColor:#D8D8D8;
		--textColor:black;
		--textAreaBorder:#CFCFCF;
		font-family:var(--puffinFont,var(--font));
		padding:8px 10px;
		background:var(--puffinTextAreaBackground,var(--textAreaBackground));
		border:0;
		outline:0;
		box-shadow:0px 0px 0px 0px rgba(0,0,0,0) ,0 0 0 0px var(--puffinTextAreaBorder,var(--textAreaBorder)); 
		margin:5px;
		border-radius:5px;
		color:var(--puffinTextColor,var(--textColor));
		font-size:13px;
		transition-duration: 0.1s;
		transition-property: box-shadow;
	}
	&:focus{
		transition-duration: 0.1s;
		transition-property: box-shadow;
		box-shadow:0px 1px 5px 2px rgba(0,0,0,.05) ,0 0 0 3px var(--puffinTextAreaBorder,var(--textAreaBorder));  
		border:0;
		outline:0;
		box-sizing: border-box;
	}
	&.disabled{
		pointer-events: none;
		background:var(--puffinDisabledColor,var(--disabledColor));
	}
`

function TextArea(){
	return element`<textarea class="${TextAreaWrapper}"/>`
}

export default TextArea