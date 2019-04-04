import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import Hero from './Hero';
import AccountLinks from './AccountLinks';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// const StyledHeader = styled.header`
//   .bar {
//     border-bottom: 10px solid ${props => props.theme.black};
//     display: grid;
//     grid-template-columns: auto 1fr;
//     justify-content: space-between;
//     align-items: stretch;
//     @media (max-width: 1300px) {
//       grid-template-columns: 1fr;
//       justify-content: center;
//     }
//   }
//   .sub-bar {
//     display: grid;
//     grid-template-columns: 1fr auto;
//     border-bottom: 1px solid ${props => props.theme.lightgrey};
//   }
// `;
const StyledHeader = styled.header`
  .logo {
    height: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// const Header = () => (
//   <StyledHeader>
//     <div className="bar">
//       <Logo>
//         <Link href="/">
//           <a>Sick Fits</a>
//         </Link>
//       </Logo>
//       <Nav />
//     </div>
//     <div className="sub-bar">
//       <p>Search</p>
//     </div>
//     <div>Cart</div>
//   </StyledHeader>
// );
const Header = () => (
  <StyledHeader>
    <AccountLinks />
    <div className="logo">
      <img height="72" width="280" src="static/logo.png" />
    </div>
    <Nav />
    <Hero />
  </StyledHeader>
);

export default Header;
