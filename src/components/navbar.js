import  {puffin} from '@mkenzo_8/puffin'

const NavbarWrapper = puffin.style.div`
    & {
        --accentColor:#0180F4;
        --accentLightColor:#53A1EA;
        --textColor:black;
        --backgroundColor:transparent;
        --backgroundColorHovering:#EFEFEF;
        --backgroundColorActive:#155BC5;
        --textColorHovering:black;
        --textColorInAccent:white;
        --font:Montserrat, sans-serif;
    }
    & *{
        font-family:var(--puffinFont,var(--font));
        
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
    & > a.active:active {
        transition:0.07s;
        background:var(--puffinBackgroundColorActive,var(--backgroundColorActive))
    }
    & > a:hover {
        transition:0.07s;
        color:var(--puffinTextColorHovering,var(--textColorHovering));
        background:var(--puffinBackgroundColorHovering,var(--backgroundColorHovering))
    }
`

const NavBar = puffin.element(`
    <NavbarWrapper> </NavbarWrapper>
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