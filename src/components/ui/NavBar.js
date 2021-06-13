import { Nav, Anchor } from "grommet";
import { Home, Notification, ChatOption } from "grommet-icons";

const NavBar = () => {
  return (
    <Nav direction="row" background="#4267B2" pad="x-small">
      <Anchor icon={<Home />} hoverIndicator color='#fff' />
      <Anchor icon={<Notification />} hoverIndicator color='#fff'/>
      <Anchor icon={<ChatOption />} hoverIndicator color='#fff'/>
    </Nav>
  )
}

export default NavBar;