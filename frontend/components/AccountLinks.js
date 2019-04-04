import Link from 'next/link';
import styled from 'styled-components';

const AccountLinksStyles = styled.ul`
  .container {
    height: 30px;
    border-bottom: 1px solid rgb(225, 225, 225);
  }
`;

const AccountLinks = () => (
  <AccountLinksStyles>
    <div className="container">
      <Link href="/find-a-recipe">
        <a>Find a Recipe</a>
      </Link>
      <Link href="/add-a-recipe">
        <a>Add a Recipe</a>
      </Link>
    </div>
  </AccountLinksStyles>
);

export default AccountLinks;
