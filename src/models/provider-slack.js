/* @flow */
// Types
import type {SlackRequestType} from './notification-request'

export type SlackProviderType = {
  type: 'logger'
} | {
  type: 'custom',
  id: string,
  send: (SlackRequestType) => Promise<string>
} | {
  type: 'slack',
  webhookUrl: string
}
