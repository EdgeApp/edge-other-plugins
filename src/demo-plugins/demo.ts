import {
  EdgeAccount,
  EdgeCorePluginOptions,
  EdgeOtherPlugin
} from 'edge-core-js'

// import { EdgeOtherPlugin } from '../types'

export interface DemoApi {
  doSomething: () => string
}

export const makeDemoPlugin = (
  options: EdgeCorePluginOptions
): EdgeOtherPlugin<DemoApi> => {
  const { log } = options

  log('makeDemoPlugin')

  return {
    getOtherMethods: async () => {
      return {
        doSomething: () => {
          return 'Hello from the demo plugin'
        }
      }
    }
  }
}

export const getDemoPlugin = async (
  account: EdgeAccount,
  pluginId: string
): Promise<EdgeOtherPlugin<DemoApi>> => {
  return account.getOtherPlugin(pluginId)
}
