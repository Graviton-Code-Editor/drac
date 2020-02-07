import  {puffin} from '@mkenzo_8/puffin'

const Text = puffin.style.p`
    &{
        --accentColor:#0066FF;
        --secondaryColor:#EFEFEF;
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
        font-weight:normal;
    }
`
export default Text