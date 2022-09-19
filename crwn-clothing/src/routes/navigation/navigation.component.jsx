import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from "./navigation.styles"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"></CrwnLogo>
                </LogoContainer>
                <NavLinksContainer>
                    {
                        currentUser && currentUser.isAdmin && (
                            <NavLink to='/admin'>
                                Admin
                            </NavLink>
                        )
                    }

                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    <NavLink to='/checkout'>
                        Checkout
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutHandler}>SIGN OUT ({`${currentUser.displayName}`})</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            Sign In
                        </NavLink>
                    )}
                    <CartIcon></CartIcon>
                </NavLinksContainer>
                {isCartOpen && <CartDropDown></CartDropDown>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
