import  {puffin} from '@mkenzo_8/puffin'

const NavbarWrapper = puffin.style.div`
    &{
        --accentColor:#0180F4;
        --accentLightColor:#53A1EA;
        --textColor:black;
        --textColorHovering:#515151;
        --textColorInAccent:white;
    }
    & *{
        font-family:Montserrat, sans-serif;
        
    }
    & > a{
        display:inline-block;
        padding:8px 9px;
        margin:5px;
        border-radius:7px;
        cursor:pointer;
    }
    & > a.active {
        background:var(--puffinAccent,var(--accentColor));
        color:var(--puffinTextColor,var(--textColorInAccent))
    }
    & > a:hover {
        color:var(--puffinTextColorHovering,var(--textColorHovering))
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