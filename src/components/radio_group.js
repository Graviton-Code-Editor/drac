import  {puffin} from '@mkenzo_8/puffin'

const RadioGroupWrapper = puffin.style.div`
    & div{
        font-family:Montserrat, sans-serif;
        padding:5px;
        margin:3px;
        display:inline-block;
        white-space:prewrap;
        right:0px;
    }
    & label input:checked ~ .circle{
        border: 6px solid  #0180F4;
        transition:0.2s;
    } 
    & label {
        display:flex;
        padding:5px;
        padding-right:15px;
        align-items: center; 
        white-space:pre-wrap;
        border-radius:10px;
    }
    & label:hover{
        background:#EFEFEF;
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
        background: #EFEFEF;
        border-radius:50px;
        border:3px solid #CFCFCF;
        margin-right:12px;
        
    } 
`
const RadioGroup = puffin.element(`
    <RadioGroupWrapper>
        
    </RadioGroupWrapper>
`,{
    events:{
        mounted(target){
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