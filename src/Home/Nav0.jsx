import { Menu } from 'antd';
import TweenOne from 'rc-tween-one';
import React from 'react';
import { getChildrenToRender } from './utils';

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      heightMenu: 0,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    console.log(phoneOpen, this.state.heightMenu);
    this.setState({ heightMenu: phoneOpen ? 140 : 0 });
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen, heightMenu } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div {...a} className={`header0-item-block ${a.className}`.trim()}>
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName='header0-item-child '>
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>{childItem.children.map(getChildrenToRender)}</a>
              ) : (
                <div {...childItem}>{childItem.children.map(getChildrenToRender)}</div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;

    return (
      <TweenOne
        component='header'
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}>
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}>
          <TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} {...dataSource.logo}>
            {dataSource.logo.children}
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}>
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={{
              height: heightMenu,
              duration: 0,
              // style: {
              //   height: heightMenu,
              // },
              onComplete: (e) => {
                if (this.state.phoneOpen) {
                  e.vars.style.height = 'auto';
                }
              },
              ease: 'easeInOutQuad',
            }}
            moment={moment}
            reverse={!!phoneOpen}>
            <Menu
              onClick={() => {}}
              mode={isMobile ? 'inline' : 'horizontal'}
              // defaultSelectedKeys={['sub0']}
              theme='dark'>
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
