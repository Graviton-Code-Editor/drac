import  {puffin} from '@mkenzo_8/puffin'

const h1 = puffin.style.h1`
    &{
        --textColor:black;
        font-family:Montserrat, sans-serif;
        margin:3px;
        margin-bottom:10px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const h2 = puffin.style.h2`
    &{
        --textColor:black;
        font-family:Montserrat, sans-serif;
        margin:3px;
        margin-bottom:8px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`
const h3 = puffin.style.h3`
    &{
        --textColor:black;
        font-family:Montserrat, sans-serif;
        margin:3px;
        margin-bottom:6px; 
        padding:5px;
        color:var(--puffinTextColor,var(--textColor));
    }
`

const Titles = {
    h1,
    h2,
    h3
}
export default Titles