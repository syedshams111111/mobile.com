import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               {/*<Link to='/'>*/}
               {/*   <img src={logo} alt="store" className="navbar-brand" />*/}
               {/*</Link> */}
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Mobile.com
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">Cart</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainWhite);
.nav-link{
    color:var(--mainBlue) !important;
    font-size: 30px;
}
`;
