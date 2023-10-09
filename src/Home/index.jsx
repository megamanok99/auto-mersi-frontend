/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import { enquireScreen } from 'enquire-js';
import React from 'react';

import Banner5 from './Banner5';
import Content0 from './Content0';
import Content11 from './Content11';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature7 from './Feature7';
import Footer1 from './Footer1';
import Nav0 from './Nav0';

import {
  Banner50DataSource,
  Content00DataSource,
  Content110DataSource,
  Feature10DataSource,
  Feature11DataSource,
  Feature20DataSource,
  Feature21DataSource,
  Feature70DataSource,
  Footer10DataSource,
  Nav00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */

    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    return (
      <>
        <Nav0
          id='Nav0_0'
          key='Nav0_0'
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile}
        />

        <Banner5
          id='Banner5_0'
          key='Banner5_0'
          dataSource={Banner50DataSource}
          isMobile={this.state.isMobile}
        />

        <Content0
          id='Content0_0'
          key='Content0_0'
          dataSource={Content00DataSource}
          isMobile={this.state.isMobile}
        />

        <Feature7
          id='Feature7_0'
          key='Feature7_0'
          dataSource={Feature70DataSource}
          isMobile={this.state.isMobile}
        />
        <div
          class='pricing1-title-wrapper'
          style={{
            textAlign: 'center',
          }}>
          <h1 name='title' class='pricing1-title-h1' id='comment'>
            <span>
              <p>Отзывы клиентов</p>
            </span>
          </h1>
        </div>
        <Feature1
          id='Feature1_1'
          key='Feature1_1'
          dataSource={Feature11DataSource}
          isMobile={this.state.isMobile}
        />

        <Feature2
          id='Feature2_0'
          key='Feature2_0'
          dataSource={Feature20DataSource}
          isMobile={this.state.isMobile}
        />

        <Feature1
          id='Feature1_0'
          key='Feature1_0'
          dataSource={Feature10DataSource}
          isMobile={this.state.isMobile}
        />

        <Feature2
          id='Feature2_1'
          key='Feature2_1'
          dataSource={Feature21DataSource}
          isMobile={this.state.isMobile}
        />

        <Content11
          id='Content11_0'
          key='Content11_0'
          dataSource={Content110DataSource}
          isMobile={this.state.isMobile}
        />

        <Footer1
          id='Footer1_0'
          key='Footer1_0'
          dataSource={Footer10DataSource}
          isMobile={this.state.isMobile}
        />
      </>
    );
  }
}
