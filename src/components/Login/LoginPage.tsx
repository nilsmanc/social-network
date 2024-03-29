import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utilities/validators/validators'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import style from './../common/FormsControls/FormsControls.module.css'
import { GetStringKeys } from '../common/FormsControls/FormsControls'

import s from './LoginPage.module.css'
import { Button } from 'antd'

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div className={s.loginWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
        {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {
          type: 'password',
        })}
        {createField<LoginFormValuesTypeKeys>(
          undefined,
          'rememberMe',
          [],
          Input,
          { type: 'checkbox' },
          'Remember me',
        )}
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&
          createField<LoginFormValuesTypeKeys>(
            'Symbols from image',
            'captcha',
            [required],
            Input,
            {},
          )}
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
          <Button htmlType='submit'>Login</Button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm)

export type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch = useDispatch()
  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  if (isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1 className={s.title}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}
