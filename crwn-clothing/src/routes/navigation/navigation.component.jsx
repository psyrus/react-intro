import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from "./navigation.styles";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
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
