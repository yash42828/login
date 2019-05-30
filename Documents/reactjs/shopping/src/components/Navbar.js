import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import '../App.css';

class Navbar extends Component {
    
    render() {
        return (

            // <div>
            //     <div className='nav1'>
            //         <h3 style={style}>
            //         <Link to='/'>
            //         <img src={logo} alt="store"
            //         />
            //         </Link>
            //         </h3>
            //         <h3 className='nav2' style={style}>
            //         <Link to='/' >
            //         <h3 style={{color:'white'}}>
            //         Products </h3>
            //         </Link>
            //         </h3>
            //         <h3 style={style}>
            //         <Link to="/cart" >
            //         <ButtonContainer style={{marginLeft:1350}}>
            //             <span>
            //             <i className="fas fa-cart-plus"/>
            //             </span>
            //             My Cart
            //         </ButtonContainer>
            //         </Link> 
            //         </h3>
            //     </div>
            // </div>


            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk  */}
            <Link to='/'>
            <img src={logo} alt="store"
            className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item">
            <Link to='/' className="nav-link">
            Products
            </Link>
            </li>
            </ul>
            <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                <span className="mr-2">
                <i className="fas fa-cart-plus"/>
                </span>
                My Cart
            </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}
const style={
    display:'inline-block',
    
    margin:10,
    marginBottom:20
}
const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform: capitalize !important; 
    }
`

export default Navbar;