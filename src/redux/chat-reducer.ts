import { Dispatch } from 'redux'
import { FormAction } from 'redux-form'
import { v1 } from 'uuid'

import { BaseThunkType, InferActionsTypes } from './redux-store'
import { StatusType } from '../api/chat-api'
import { chatAPI, ChatMessageAPIType } from './../api/chat-api'

type ChatMessageType = ChatMessageAPIType & { id: string }

let initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusType,
}

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/chat/MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.payload.messages.map((m) => ({ ...m, id: v1() })),
        ].filter((m, index, array) => index >= array.length - 100),
      }
    case 'SN/chat/STATUS_CHANGED':
      return {
        ...state,
        status: action.payload.status,
      }
    case 'SN/chat/MESSAGES_CLEANED':
      return {
        ...state,
        messages: [],
      }
    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageAPIType[]) =>
    ({
      type: 'SN/chat/MESSAGES_RECEIVED',
      payload: { messages },
    } as const),

  statusChanged: (status: StatusType) =>
    ({
      type: 'SN/chat/STATUS_CHANGED',
      payload: { status },
    } as const),

  messagesCleaned: () =>
    ({
      type: 'SN/chat/MESSAGES_CLEANED',
    } as const),
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages))
    }
  }
  return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status))
    }
  }
  return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
  chatAPI.stop()
  dispatch(actions.messagesCleaned())
}

export const sendMessage =
  (message: string): ThunkType =>
  async () => {
    chatAPI.sendMessage(message)
  }

export default chatReducer

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
