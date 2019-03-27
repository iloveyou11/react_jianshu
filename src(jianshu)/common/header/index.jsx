import React, { Component } from 'react'
import {connect} from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import {
    CSSTransition
} from 'react-transition-group'

class Header extends Component {

    constructor(props) {
        super(props)
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={1000}
                        classNames="slide"
                    >
                        <NavSearch
                            placeholder="搜索"
                            className={this.props.focused ? 'focused' : ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>

                </Nav>
                <Addition>
                    <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused:state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)