import test from 'ava'
import { toExport } from '../src/util'
import { topLevel, nested } from './stubs/fileMetadata.js'

test('indexes top-level files', t => {
  const value = toExport(topLevel),
        expected = "export { default as Baleada } from './Baleada.js'"

  t.is(value, expected)
})

test('indexes nested files', t => {
  const value = toExport(nested),
        expected = "export { default as Baleada } from './nested/Baleada.js'"

  t.is(value, expected)
})
