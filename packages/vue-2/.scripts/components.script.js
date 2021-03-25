/**
 * vue - components
 * --------------------------------------
 * Adds the component to the Vue app instance.
 */

const path = require('path')
const lodash = require('lodash')
const file = require('../../../.scripts/file')
const { title } = require('../../../.scripts/log')
const libaryLib = require('../../library/.scripts/components.lib')

const run = async () => {
  await title('vue : components')
  const components = await libaryLib.components()
  const componentNames = []
  components.forEach(component => {
    componentNames.push(lodash.upperFirst(lodash.camelCase(component.tag)))
  })

  const appComponents = componentNames.map(name => `  _Vue.component('${name}', ${name})`)
  const content = [
    '// generated file by .scripts/components.script.js',
    '',
    `import { PluginFunction } from 'vue'`,
    `import {`,
    componentNames.join(',\n'),
    `} from '../components'`,
    '',
    'export const addComponents: PluginFunction<any> = (_Vue): void => {',
    appComponents.join('\n'),
    '',
    '}',
    '',
  ].join('\n')

  await file.save(path.join(__dirname, '../src/generated/components.ts'), content)
}

run()
