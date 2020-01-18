import  {puffin} from '@mkenzo_8/puffin'

const RadioGroupWrapper = puffin.style.div`
    &{
        --accentColor:#0180F4;
        --accentLightColor:#53A1EA;
        --secondaryColor:#EFEFEF;
        --thirdColor:#CFCFCF;
        --textColor:black;
    }
    & div{
        font-family:Montserrat, sans-serif;
        padding:5px;
        margin:3px;
        display:inline-block;
        white-space:prewrap;
        right:0px;
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
    }
    & label:hover{
        transition:0.05s;
        background: var(--puffinAccent,var(--secondaryColor));
    }
    & label p{
        margin:0;
        white-space:nowrap;
    }
    & label input{
       display:none;
    }
    & label .circle{
        transition:0.2s;
        box-sizing:border-box;
        min-height:25px;
        min-width:25px;
        background: var(--puffinAccent,var(--secondaryColor));
        border-radius:50px;
        border:3px solid var(--puffinAccent,var(--thirdColor));
        margin-right:12px;
    } 
    & label:active .circle{
        transition:0.2s;
        box-shadow:0px 0px 0px 3px var(--puffinAccentLight,var(--accentLightColor));        
    } 
`
const RadioGroup = puffin.element(`
    <RadioGroupWrapper>
        
    </RadioGroupWrapper>
`,{
    events:{
        mounted(target){
            if(target.children[0].tagName == "DIV") return;
            const randomName = Math.random()
            const tempContent = target.innerHTML;
            target.innerHTML = `<div>${tempContent}</div>`
            const radios = target.children[0].children
            for( const radio of radios){
                if(radio.tagName == "LABEL"){
                    radio.innerHTML = `
                        <input type="radio" name="${randomName}" ${radio.getAttribute("checked")==""?"checked":""} />
                        <div class="circle"></div>
                        <p>${radio.textContent}</p>      
                    `
                    radio.children[0].onclick = function(e){
                        const event = new CustomEvent('radioSelected', { detail: {target:radio} });
                        target.dispatchEvent(event);
                    }
                }
                
            }
           
        }
    },
    components:{
        RadioGroupWrapper
    }
})

export default RadioGroup