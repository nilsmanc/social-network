import React, { Component, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import { withRouter } from './hoc/withRouter'
import { initializeApp } from './redux/app-reducer'
import store from './redux/redux-store'
import { AppStateType } from './redux/redux-store'
import { UsersPage } from './components/Users/Users'
import { LoginPage } from './components/Login/LoginPage'
import { Header } from './components/Header/Header'

import './App.css'
import 'antd/dist/antd.css'
import { Layout, Menu, Spin } from 'antd'
import { UserOutlined, LaptopOutlined } from '@ant-design/icons'

const { Content, Sider } = Layout

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some error occured')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Spin size='large' />
    }
    const items = [
      {
        label: 'Profiles',
        key: 'sub1',
        icon: <UserOutlined />,
        children: [
          { label: <Link to='/profile'>My profile</Link>, key: '1' },
          { label: <Link to='/developers'>Users</Link>, key: '2' },
        ],
      },
      {
        label: 'Messages',
        key: 'sub2',
        icon: <LaptopOutlined />,
        children: [
          { label: <Link to='/dialogs'>Direct messages</Link>, key: '3' },
          { label: <Link to='/chat'>Chat</Link>, key: '4' },
        ],
      },
    ]
    return (
      <div className='app-wrapper'>
        <Layout>
          <Header />
          <Layout>
            <Sider
              breakpoint='lg'
              collapsedWidth='0'
              onBreakpoint={(broken) => {
                console.log(broken)
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
              }}>
              <Menu theme='dark' mode='inline' items={items} />
            </Sider>
            <div className='app-content'>
              <Content className='content' style={{ margin: '25px 40px' }}>
                <Suspense fallback={<Spin size='large' />}>
                  <Routes>
                    <Route path='/' element={<Navigate to={'/profile'} />} />
                    <Route path='/dialogs/*' element={<DialogsContainer />} />
                    <Route path='/profile/:userId' element={<ProfileContainer />} />
                    <Route path='/developers' element={<UsersPage />} />
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/chat' element={<ChatPage />} />
                    <Route path='*' element={<div>404 NOT FOUND</div>} />
                  </Routes>
                </Suspense>
              </Content>
            </div>
          </Layout>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App)

const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp
