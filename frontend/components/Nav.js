import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.div`
  height: 45px;
  border: 1px solid rgb(225, 225, 225);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #bf9764;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 45px;

    height: 45px;
    display: inline-block;
    padding: 0 5px;
    border-left: 1px solid #e1e1e1;
  }

  a:last-child {
    border-right: 1px solid #e1e1e1;
  }
`;

const Nav = () => (
  <NavStyles>
    <Link href="/find-a-recipe">
      <a>Find a Recipe</a>
    </Link>
    <Link href="/add-a-recipe">
      <a>Add a Recipe</a>
    </Link>
  </NavStyles>
);

export default Nav;
