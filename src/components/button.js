import  {puffin} from '@mkenzo_8/puffin'

const Button = puffin.style.button`
    &{
        font-family:Montserrat, sans-serif;
        --primaryColorButton:#0066FF;
        --backgroundColor:#EFEFEF;
        transition:0.1s;
        padding:10px 20px;
        background:var(--backgroundColor);
        border:0;
        outline:0;
        text-transform: uppercase;
        box-shadow:0px 0px 0px 0px rgba(0,0,0,0) ,0 0 0 0px var(--primaryColorButton); 
        margin:5px;
        border-radius:5px;
    }
    &:hover:not(:active){
        cursor:pointer;
        transition:0.1s;
        box-shadow:0px 1px 5px 2px rgba(0,0,0,.05) ,0 0 0 0px var(--primaryColorButton);  
    }
    &:active{
        border:0;
        outline:0;
        box-sizing: border-box;
        box-shadow:0px 1px 5px 3px rgba(0,0,0,.05) ,0 0 0 3px var(--primaryColorButton);  
    }
`
export default Button