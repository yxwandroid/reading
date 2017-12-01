/**
 *
 * Copyright 2015-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from '../pages/Splash';
import CategoryContainer from '../containers/CategoryContainer';
import MainContainer from '../containers/MainContainer';
import WebViewPage from '../pages/ItemDetail/WebViewPage';
import Feedback from '../pages/Feedback/Feedback';
import About from '../pages/About/About';

const TabContainer = TabNavigator(
  {
    Main: { screen: MainContainer },
    Category: { screen: CategoryContainer },
    Feedback: { screen: Feedback },
    About: { screen: About }
  },
  {
    lazy: true, //是否使用懒加载   默认是 false
    tabBarPosition: 'bottom',   //位置 top bottom
    tabBarOptions: {
      activeTintColor: '#3e9ce9', //字体颜色
      inactiveTintColor: '#999999', //label和icon的前景色 不活跃状态下
      showIcon: true, //是否显示ico
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
          padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Category: {
      screen: CategoryContainer,
      navigationOptions: {
        // 设置左边标题不显示
        headerLeft: null
      }
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Web: { screen: WebViewPage }
  },
  {
    //  flot  screen  none
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        // 设置标题栏颜色
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        // 标题栏title颜色
        color: '#fff',
        fontSize: 20
      },
        //提示文字颜色
      headerTintColor: '#fff'
    }
  }
);

export default App;
