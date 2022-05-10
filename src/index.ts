import { EdgeCorePlugins } from 'edge-core-js/types'

import { makeDemoPlugin } from './demo-plugins/demo'

const plugins: EdgeCorePlugins = {
  demo: makeDemoPlugin
}

if (typeof window !== 'undefined') {
  window.addEdgeCorePlugins?.(plugins)
}

export default plugins
