import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 100vw;
  background-color: #dddddd;

  ul {
    display: flex;
    gap: 32px;
    list-style-type: none;
  }
`

const Navbar = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </StyledNav>
)

export default Navbar
