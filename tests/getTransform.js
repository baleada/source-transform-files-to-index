import test from 'ava'
import getTransform from '../src'
import { toIds, toMetadata, toExport } from '../src/util'

test('returns a function that transforms files to an index', t => {
  const filesToIndex = getTransform(),
        value = filesToIndex({ id: 'tests/stubs/files/index.js' }),
        expected = toMetadata({
          dir: 'tests/stubs/files',
          paths: toIds({ dir: 'tests/stubs/files', include: ['*'], exclude: ['index.js'] })
        }).map(toExport).join('\n')

  console.log(value)

  t.is(value, expected)
})
