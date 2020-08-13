import test from 'ava'
import { toPaths, toMetadata } from '../src/util'
import { resolve } from 'path'

const basePath = resolve(''),
      dirStub = `${basePath}/tests/stubs/files`,
      paths = toPaths({ dir: dirStub, test: ({ id, createFilter }) => createFilter('**', ['**/*index.js', '**/.**'])(id) }) // Tested separately

test('extracts metadata from paths', t => {
  const value = toMetadata({
          dir: dirStub,
          paths
        }),
        expected = [
          {
            name: 'baz',
            extension: 'md',
            relativePathFromIndex: './bar/',
          },
          {
            name: 'poop',
            extension: 'vue',
            relativePathFromIndex: './bar/qux/',
          },
          {
            name: 'foo',
            extension: 'js',
            relativePathFromIndex: './',
          },
        ]

  t.deepEqual(value, expected)
})
