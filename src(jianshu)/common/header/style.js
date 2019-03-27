import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div `
    position: relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a `
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100px;
    display: block;
    background:url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div `
    width: 960px;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div `
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`

export const NavSearch = styled.input `
    width: 200px;
    height: 38px;
    border: none;
    outline: none;
    padding:0 20px;
    margin-top:9px;
    box-sizing: border-box;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;   
    margin-left: 20px;
    &::placeholder:#999;
    &.focused{
        width:300px;
        border-radius: 5px;
    }
    &.slider-enter{
        transition:all 1s ease-out
    }
    &.slider-enter-active{
        width:300px;
    }
    &.slider-exit{
        transition:all 1s ease-out
    }
    &.slider-exit-active{
        width:200px;
    }
`

export const Addition = styled.div `
    position: absolute;
    right: 50px;
    top: 0;
    height: 56px;
`

export const Button = styled.div `
    float: right;
    line-height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`