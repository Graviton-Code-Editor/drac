import { element, style } from '@mkenzo_8/puffin'

const CardWrapper = style`
	&{
		--font:Montserrat, sans-serif;
		--cardAccentColor: var(--puffinAccent,#0066FF);
		--cardBackground: var(--puffinCardBackground, #EFEFEF);
		--disabledColor: var(--puffinDisabledColor,#D8D8D8);;
		--textColor:var(--puffinTextColor, black);
		transition:0.1s;
		font-family:var(--puffinFont,var(--font));
		padding:10px 20px;
		min-height:30px;
		min-width:30px;
		max-width:300px;
		max-height:300px;
		background: var(--cardBackground);
		border:0;
		outline:0;
		box-shadow:0px 0px 0px 0px rgba(0,0,0,0) ,0 0 0 0px var(--cardAccentColor); 
		margin:5px;
		border-radius:5px;
		color:var(--textColor);
		box-sizing: border-box;
		display:inline-block;
		overflow:auto;
	}
	&:hover:not(:active){
		cursor:pointer;
		transition:0.1s;
		box-shadow:0px 1px 5px 2px rgba(0,0,0,.05) ,0 0 0 0px var(--cardAccentColor);  
	}
	&:active{
		border:0;
		outline:0;
		box-sizing: border-box;
		box-shadow:0px 1px 5px 3px rgba(0,0,0,.05) ,0 0 0 3px var(--cardAccentColor);  
	}
	&.active{
		border:0;
		outline:0;
		box-sizing: border-box;
		box-shadow:0px 1px 5px 3px rgba(0,0,0,.05) ,0 0 0 3px var(--cardAccentColor);  
	}
	&.disabled{
		pointer-events: none;
		background:var(--disabledColor);
	}
`

function Card(){
	return element`<div class="${CardWrapper}"/>`
}

export default Card