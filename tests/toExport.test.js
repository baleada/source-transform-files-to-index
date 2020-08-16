import test from 'ava'
import { toExport } from '../src/util'
import { topLevel, nested } from './stubs/fileMetadata.js'
import { resolve } from 'path'

const basePath = resolve('')

test('exports top-level files', t => {
  const value = toExport({ fileMetadata: topLevel, importType: 'absolute' }),
        expected = `export { default as Baleada } from '${basePath}/Baleada.js'`

  t.is(value, expected)
})

test('exports nested files', t => {
  const value = toExport({ fileMetadata: nested, importType: 'absolute' }),
        expected = `export { default as Baleada } from '${basePath}/nested/Baleada.js'`

  t.is(value, expected)
})

test('can import from paths relative from index', t => {
  const value = toExport({ fileMetadata: nested, importType: 'relativeFromIndex' }),
        expected = "export { default as Baleada } from './nested/Baleada.js'"

  t.is(value, expected)
})

test('can import from paths relative from root', t => {
  const value = toExport({ fileMetadata: nested, importType: 'relativeFromRoot' }),
        expected = "export { default as Baleada } from '/nested/Baleada.js'"

  t.is(value, expected)
})
