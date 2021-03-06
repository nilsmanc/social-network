import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls';
import { createField, GetStringKeys } from '../../../common/FormsControls/FormsControls';

type PropsType = {};

export type AddPostFormValuesType = {
  newPostText: string;
};

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>;

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (
  props,
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>{createField<AddPostFormValuesTypeKeys>('Your post', 'newPostText', [], Input)}</div>
      <div>
        <button style={{ margin: '5px 0 0 0' }}>Add post</button>
      </div>
    </form>
  );
};

export default reduxForm<AddPostFormValuesType, PropsType>({
  form: 'profile-add-post',
})(AddPostForm);
