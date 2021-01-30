import  { element, style, render } from '@mkenzo_8/puffin'

function Option({ content, name, checked = false, hiddenRadio = false, styled = true, key = '' }){
	function selected(){
		const event = new CustomEvent('radioSelected', { detail: {
			target: this.parentElement,
			content,
			key
		}})
		this.parentElement.parentElement.parentElement.dispatchEvent(event)
	}
	
	function mounted(){
		if( checked ){
			this.children[0].children[0].setAttribute('checked','')
		}
		this.setAttribute('hidden-radio',hiddenRadio.toString())
		this.setAttribute('styled',styled.toString())
	}
	return element`
		<label mounted="${mounted}" key="${key}">
			<div class="wrapper">
				<input :click="${selected}" type="radio" name="${name}"></input>
				<div class="circle"></div>
				<p>${content}</p> 
			</div>
		</label>
    `
	
}

const RadioGroupWrapper = style`
	&{
		--radioAccentColor:#0180F4;
		--radioCircleBackground:#EFEFEF;
		--radioBackgroundHovering:#EFEFEF;
		--radioCircleBorder:#CFCFCF;
		--radioCircleBorderHovering:#53A1EA;
		--textColor:black;
		font-size: 13px;
	}
	& .wrapper{
		display:flex;
		width:auto;
		align-items:center;
	}
	&[styled="true"]{
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		padding:2px 5px;
		margin:3px;
		display:inline-block;
		right:0;
		color:var(--puffinTextColor,var(--textColor));
	}
	&[direction="horizontally"] {
		display:flex;
	}
	& label[styled="true"] input:checked ~ .circle{
		border: 5px solid var(--puffinAccent,var(--radioAccentColor));
		transition:0.2s;
	}
	& label[styled="true"] {
		transition:0.05s;
		display:flex;
		padding:5px;
		padding-right:15px;
		align-items: center; 
		white-space:pre-wrap;
		border-radius:10px;
		right:0;
	}
	& label[styled="true"]:hover{
		transition:0.05s;
		background: var(--puffinRadioBackgroundHovering,var(--radioBackgroundHovering));
	}
	& label p{
		margin:0;
		white-space:nowrap;
	}
	& label[styled="true"] p{
		color:var(--puffinTextColor,var(--textColor));
		font-family:var(--puffinFont,var(--font));
	}
	& label[styled="true"] input{
		display:none;
	}
	& label[hidden-radio="true"] .circle, label[hidden-radio="true"] input{
		display:none;
	}
	& label[styled="true"] .circle{
		transition:0.2s;
		box-sizing:border-box;
		height:21px;
		width:21px;
		background: var(--puffinRadioCircleBackground,var(--radioCircleBackground));
		border-radius:50px;
		border:2px solid var(--puffinRadioCircleBorder,var(--radioCircleBorder));
		margin-right:10px;
	}
	& label[styled="true"]:active .circle{
		transition:0.2s;
		box-shadow:0px 0px 0px 2px var(--puffinRadioCircleBorderHovering,var(--radioCircleBorderHovering));        
	}
`
function mounted(){
	const target = this
	if(target.getAttribute('direction') == null) target.setAttribute('direction', 'vertically')
	if(target.getAttribute('styled') == null) target.setAttribute('styled', 'true')
}
function RadioGroup({ options }){
	const name = Math.random()
	
	return element`
	<div mounted="${mounted}" class="${RadioGroupWrapper}">
		${options.map(option => {
			if(typeof option === 'string') return Option({ 
				content: option, 
				name
			})
			if(typeof option === 'object') return Option({ 
				content: option.label || option.component(),
				name,
				checked: option.checked,
				hiddenRadio: option.hiddenRadio,
				styled: option.styled,
				key: option.key
			})
			if(typeof option === 'function') return Option({ 
				content: option(),
				name
			})
		})}
	</div>`
}

export default RadioGroup