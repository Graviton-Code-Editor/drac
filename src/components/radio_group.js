import  { element, style, render } from '@mkenzo_8/puffin'


function Option(name,radio,target){
    const radioContent = radio.innerHTML
    radio.innerHTML = ""
	function selected(){
		const event = new CustomEvent('radioSelected', { detail: {target:radio} });
		target.dispatchEvent(event);
	}


    return element`
		<div class="wrapper">
			<input :click="${selected}" type="radio" name="${name}" checked="${radio.getAttribute("checked")}"></input>
			<div class="circle"></div>
			<p>${radioContent}</p> 
		</div>
    `
	
}

const RadioGroupWrapper = style`
    &{
        --accentColor:#0180F4;
        --radioCircleBackground:#EFEFEF;
        --radioBackgroundHovering:#EFEFEF;
        --radioCircleBorder:#CFCFCF;
        --radioCircleBorderHovering:#53A1EA;
        --textColor:black;
    }
    & .wrapper{
        display:flex;
        width:auto;
        align-items:center;
    }
    &[styled="true"]{
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        padding:5px;
        margin:3px;
        display:inline-block;
        right:0;
        color:var(--puffinTextColor,var(--textColor));
    }
    &[direction="vertically"] {
        display:flex;
    }
    & label[styled="true"] input:checked ~ .circle{
        border: 6px solid var(--puffinAccent,var(--accentColor));
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
    & label[hidden-radio="true"] input{
       display:none;
    }
    & label[styled="true"] .circle{
        transition:0.2s;
        box-sizing:border-box;
        height:25px;
        width:25px;
        background: var(--puffinRadioCircleBackground,var(--radioCircleBackground));
        border-radius:50px;
        border:3px solid var(--puffinRadioCircleBorder,var(--radioCircleBorder));
        margin-right:12px;
    }
    & label[styled="true"]:active .circle{
        transition:0.2s;
        box-shadow:0px 0px 0px 3px var(--puffinRadioCircleBorderHovering,var(--radioCircleBorderHovering));        
    }
`
function mounted(){
	const target = this
	if(target.getAttribute("direction") == null) target.setAttribute("direction","horizontally")
	if(target.getAttribute("styled") == null) target.setAttribute("styled","true")
	if(target.children.length > 0){
		if(target.children[0].tagName == "DIV") return;
		const randomName = Math.random()
		const radios = target.children
		for( const radio of radios){
			if(radio.tagName == "LABEL"){
				if(radio.getAttribute("styled") == null) {
					radio.setAttribute("styled","true")
					if(radio.getAttribute("hidden-radio") == null) radio.setAttribute("hidden-radio","false")
				}
				render(new Option(randomName,radio,target),radio)
			}
		}
	}
}
function RadioGroup(){
	return element`<div mounted="${mounted}" class="${()=>RadioGroupWrapper}"></div>`
}


export default RadioGroup