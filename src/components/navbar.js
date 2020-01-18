import  {puffin} from '@mkenzo_8/puffin'

const NavbarWrapper = puffin.style.div`
    &{
        --accentColor:#0180F4;
        --accentLightColor:#53A1EA;
        --textColor:black;
        --textColorInAccent:white;
    }
    & *{
        font-family:Montserrat, sans-serif;
        
    }
    & > *{
        display:inline-block;
        padding:8px 9px;
        margin:5px;
        color:var(--puffinTextColor,var(--textColor));
        border-radius:7px;
    }
    & > *.active {
        background:var(--puffinAccent,var(--accentColor));
        color:var(--puffinTextColor,var(--textColorInAccent))
    }
`
const NavBar = puffin.element(`
    <NavbarWrapper>
        <div>

        </div>
    </NavbarWrapper>
`,{
    events:{
        mounted(target){
            const radios = target.children
            for( const radio of radios){
                radio.onclick = function(e){
                    for( const radio2 of radios){
                        radio2.classList.remove("active")
                    }
                    radio.classList.add("active")
                }
                
            }
           
        }
    },
    components:{
        NavbarWrapper
    }
})

export default NavBar