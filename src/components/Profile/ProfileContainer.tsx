import React from 'react'
import { connect } from 'react-redux'
import { History } from 'history'

import Profile from './Profile'
import {
  getStatus,
  getUserProfile,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'
import { AppStateType } from '../../redux/redux-store'
import { ProfileType } from '../../types/types'

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
  router: any
  history: History
}

type PropsType = MapPropsType & DispatchPropsType & PathParamsType

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props)
  }

  refreshProfile() {
    let userId: number | null = +this.props.router.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    if (!userId) {
      console.error("ID should exist in URI params or in state('authorizedUserId')")
    } else {
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
    }
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.router.params.userId != prevProps.router.params.userId) this.refreshProfile()
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
