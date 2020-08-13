import { dirname } from 'path'
import { toPaths, toMetadata, toExport } from './util'

export default function getTransform (options = {}) {
  const { include = '**', exclude = ['**/*index.js', '**/.**'], rawTest } = options,
        test = resolveTest(include, exclude, rawTest)

  return ({ id }) => {
    const dir = dirname(id),
          paths = toPaths({ dir, test }),
          withMetadata = toMetadata({ dir, paths }),
          exports = withMetadata.map(toExport).join('\n')
    
    return exports
  }
}

function resolveTest (include, exclude, test) {
  return typeof test === 'function'
    ? test
    : ({ id, createFilter }) => createFilter(include, exclude)(id)
}
