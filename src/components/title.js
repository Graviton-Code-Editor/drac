import  {puffin} from '@mkenzo_8/puffin'

const h1 = puffin.style.h1`
    &{
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        margin-bottom:10px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const h2 = puffin.style.h2`
    &{
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        margin-bottom:8px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const h3 = puffin.style.h3`
    &{
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        margin-bottom:6px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`

const h4 = puffin.style.h4`
    &{
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        margin-bottom:6px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const h5 = puffin.style.h5`
    &{
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        margin-bottom:6px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const h6 = puffin.style.h6`
    &{
        --textColor:black;
        --font:Montserrat, sans-serif;
        font-family:var(--puffinFont,var(--font));
        margin:3px;
        margin-bottom:6px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const Titles = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
}
export default Titles