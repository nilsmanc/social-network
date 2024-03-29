import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { maxLengthCreator } from '../../../utilities/validators/validators'
import { Textarea, createField } from '../../common/FormsControls/FormsControls'
import { NewMessageFormValuesType } from '../Dialogs'

import { Button } from 'antd'

const maxLength50 = maxLengthCreator(50)

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>

type PropsType = {}

const AddMessageForm: React.FC<
  InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<NewMessageFormValuesKeysType>(
          'Enter your message',
          'newMessageBody',
          [maxLength50],
          Textarea,
        )}
      </div>
      <div>
        <Button htmlType='submit'>Send</Button>
      </div>
    </form>
  )
}

export default reduxForm<NewMessageFormValuesType>({
  form: 'dialog-add-message-form',
})(AddMessageForm)
