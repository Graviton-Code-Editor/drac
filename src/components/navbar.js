import  { style, element } from '@mkenzo_8/puffin'

const NavbarWrapper = style`
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
		color:var(--puffinTextColorInAccent,var(--textColorInAccent))
	}
	& > a.active:active {
		transition:0.07s;
		background:var(--puffinNavbarBackgroundActive,var(--backgroundColorActive))
	}
	& > a:not(.active):hover {
		transition:0.07s;
		color:var(--puffinNavbarColorHovering,var(--textColorHovering));
		background:var(--puffinNavbarBackgroundHovering,var(--backgroundColorHovering))
	}
`

function mounted(){
	const radios = this.children
	for( const radio of radios){
		radio.onclick = function(e){
			for( const radio2 of radios){
				radio2.classList.remove("active")
			}
			radio.classList.add("active")
		}
	}
}

function NavBar(){
	return element`
<div class="${NavbarWrapper	}" mounted="${mounted}></div>
`
}


export default NavBar