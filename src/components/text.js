import  {puffin} from '@mkenzo_8/puffin'

const Text = puffin.style.p`
    &{
        --accentColor:#0066FF;
        --secondaryColor:#EFEFEF;
        --textColor:black;
        font-family:Montserrat, sans-serif;
        margin:3px;
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
export default Text