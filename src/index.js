import { toFilesDir, toIds, toMetadata, toExport } from './util'

export default function createTransform (options = {}) {
  const { include = '**', exclude = ['**/*index.js', '**/.**'], test: rawTest, importType = 'absolute' } = options,
        test = resolveTest({ include, exclude, test: rawTest })

  return ({ id }) => {
    const filesDir = toFilesDir(id),
          ids = toIds({ filesDir, test }),
          metadata = toMetadata({ filesDir, ids }),
          exports = metadata.map(fileMetadata => toExport({ fileMetadata, importType })).join('\n')
    
    return exports
  }
}

function resolveTest ({ include, exclude, test }) {
  return typeof test === 'function'
    ? test
    : ({ id, createFilter }) => createFilter(include, exclude)(id)
}
