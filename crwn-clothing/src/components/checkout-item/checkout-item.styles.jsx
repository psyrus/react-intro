import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
     width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`
export const CheckoutImage = styled.img`
    width: 100%;
    height: 100%;
`
export const CheckoutItemProperty = styled.span`
    width: 23%;
`
export const CheckoutItemQuantity = styled(CheckoutItemProperty)`
    display: flex;
`
export const CheckoutItemQuantityArrow = styled(CheckoutItemQuantity)`
    cursor: pointer;
`
export const CheckoutItemQuantityValue = styled(CheckoutItemQuantity)`
    margin: 0 10px;
`

export const RemoveItemButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`
