import  {puffin} from '@mkenzo_8/puffin'


function Option(name,radio,target){
    const text = radio.textContent
    radio.innerText = ""
    return new puffin.element(`
        <div class="wrapper">
            <input click="$selected" type="radio" name="${name}" ${radio.getAttribute("checked")==""?"checked=''":""} />
            <div class="circle"></div>
            <p>${text}</p> 
        </div>
    `,{
        methods:{
            selected(){
                const event = new CustomEvent('radioSelected', { detail: {target:radio} });
                target.dispatchEvent(event);
            }
        }
    })
}

const RadioGroupWrapper = puffin.style.div`
    &{
        --accentColor:#0180F4;
        --accentLightColor:#53A1EA;
        --radioCircleBackground:#EFEFEF;
        --radioBackgroundHovering:#EFEFEF;
        --radioCircleBorder:#CFCFCF;
        --textColor:black;
    }
    & .wrapper{
        display:flex;
        left:0;
        width:auto;
        align-items:center;
    }
    &{
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        padding:5px;
        margin:3px;
        display:inline-block;
        right:0;
        color:var(--puffinTextColor,var(--textColor));
    }
    & label input:checked ~ .circle{
        border: 6px solid var(--puffinAccent,var(--accentColor));
        transition:0.2s;
    }
    & label {
        transition:0.05s;
        display:flex;
        padding:5px;
        padding-right:15px;
        align-items: center; 
        white-space:pre-wrap;
        border-radius:10px;
        right:0;
    }
    & label:hover{
        transition:0.05s;
        background: var(--puffinRadioBackgroundHovering,var(--radioBackgroundHovering));
    }
    & label p{
        margin:0;
        white-space:nowrap;
        color:var(--puffinTextColor,var(--textColor));
    }
    & label input{
       display:none;
    }
    & label .circle{
        transition:0.2s;
        box-sizing:border-box;
        height:25px;
        width:25px;
        background: var(--puffinRadioCircleBackground,var(--radioCircleBackground));
        border-radius:50px;
        border:3px solid var(--puffinRadioCircleBorder,var(--radioCircleBorder));
        margin-right:12px;
    }
    & label:active .circle{
        transition:0.2s;
        box-shadow:0px 0px 0px 3px var(--puffinAccentLight,var(--accentLightColor));        
    }
`
const RadioGroup = puffin.element(`
    <RadioGroupWrapper> </RadioGroupWrapper>
`,{
    events:{
        mounted(target){
            if(target.children[0].tagName == "DIV") return;
            const randomName = Math.random()
            const radios = target.children
            for( const radio of radios){
                if(radio.tagName == "LABEL"){
                    puffin.render(new Option(randomName,radio,target),radio,{
                        removeContent:false
                    })
                }
                
            }
           
        }
    },
    components:{
        RadioGroupWrapper
    }
})

export default RadioGroup