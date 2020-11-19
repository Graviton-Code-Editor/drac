import  { style, element } from '@mkenzo_8/puffin'

const InputWrapper = style`
	&{
		--font:Montserrat, sans-serif;
		--inputBackground:#EFEFEF;
		--disabledColor:#D8D8D8;
		--textColor:black;
		--inputBorder:#CFCFCF;
		transition:0.1s;
		font-family:var(--puffinFont,var(--font));
		padding:8px 10px;
		background:var(--puffinInputBackground,var(--inputBackground));
		border:0;
		outline:0;
		box-shadow:0px 0px 0px 0px rgba(0,0,0,0) ,0 0 0 0px var(--puffinInputBorder,var(--inputBorder)); 
		margin:5px;
		border-radius:5px;
		color:var(--puffinTextColor,var(--textColor));
		font-size:13px;
	}
	&:focus{
		transition:0.1s;
		box-shadow:0px 1px 5px 2px rgba(0,0,0,.05) ,0 0 0 3px var(--puffinInputBorder,var(--inputBorder));  
		border:0;
		outline:0;
		box-sizing: border-box;
	}
	&.disabled{
		pointer-events: none;
		background:var(--puffinDisabledColor,var(--disabledColor));
	}
`

function Input(){
	return element`<input class="${InputWrapper}"/>`
}

export default Input