import  {puffin} from '@mkenzo_8/puffin'

const Button = puffin.style.button`
    &{
        --accentColor:#0066FF;
        --secondaryColor:#EFEFEF;
        --textColor:black;
        transition:0.1s;
        font-family:Montserrat, sans-serif;
        padding:10px 20px;
        background:var(--secondaryColor);
        border:0;
        outline:0;
        text-transform: uppercase;
        box-shadow:0px 0px 0px 0px rgba(0,0,0,0) ,0 0 0 0px var(--puffinAccent,var(--accentColor)); 
        margin:5px;
        border-radius:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
    &:hover:not(:active){
        cursor:pointer;
        transition:0.1s;
        box-shadow:0px 1px 5px 2px rgba(0,0,0,.05) ,0 0 0 0px var(--puffinAccent,var(--accentColor));  
    }
    &:active{
        border:0;
        outline:0;
        box-sizing: border-box;
        box-shadow:0px 1px 5px 3px rgba(0,0,0,.05) ,0 0 0 3px var(--puffinAccent,var(--accentColor));  
    }
`
export default Button