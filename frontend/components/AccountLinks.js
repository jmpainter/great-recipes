import Link from 'next/link';
import styled from 'styled-components';

const AccountLinksStyles = styled.div`
  height: 30px;
  border-bottom: 1px solid rgb(225, 225, 225);

  .inner {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  }

  .inner a {
    list-style-type: none;
    margin: 0;
    padding: 0 7px;
    height: 100%;
    border-left: 1px solid rgb(225, 225, 225);
    border-right: 1px solid rgb(225, 225, 225);
    display: flex;
    align-items: center;
    color: #bf9764;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
  }
`;

const AccountLinks = () => (
  <AccountLinksStyles>
    <div className="container">
      <div className="inner">
        <Link href="/find-a-recipe">
          <a>Find a Recipe</a>
        </Link>
        <Link href="/add-a-recipe">
          <a>Add a Recipe</a>
        </Link>
      </div>
    </div>
  </AccountLinksStyles>
);

export default AccountLinks;
