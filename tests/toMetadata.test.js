import test from 'ava'
import { toIds, toMetadata } from '../src/util'
import { resolve } from 'path'

const basePath = resolve(''),
      filesDirStub = `${basePath}/tests/stubs/files`,
      ids = toIds({ filesDir: filesDirStub, test: ({ id, createFilter }) => createFilter('**', ['**/*index.js', '**/.**'])(id) }) // Tested separately

test('extracts metadata from ids', t => {
  const value = toMetadata({
          filesDir: filesDirStub,
          ids
        }),
        expected = [
          {
            name: 'baz',
            extension: 'md',
            path: {
              relativeFromRoot: '/tests/stubs/files/bar/',
              relativeFromIndex: './bar/',
              absolute: `${filesDirStub}/bar/`,
            }
          },
          {
            name: 'poop',
            extension: 'vue',
            path: {
              relativeFromRoot: '/tests/stubs/files/bar/qux/',
              relativeFromIndex: './bar/qux/',
              absolute: `${filesDirStub}/bar/qux/`,
            }
          },
          {
            name: 'foo',
            extension: 'js',
            path: {
              relativeFromRoot: '/tests/stubs/files/',
              relativeFromIndex: './',
              absolute: `${filesDirStub}/`,
            }
          },
        ]

  t.deepEqual(value, expected)
})
