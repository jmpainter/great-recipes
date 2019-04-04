import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
`;

const Nav = () => (
  <NavStyles>
    <Link href="/login">
      <a>Find a Recipe</a>
    </Link>
    <Link href="/sign-up">
      <a>Add a Recipe</a>
    </Link>
  </NavStyles>
);

export default Nav;
