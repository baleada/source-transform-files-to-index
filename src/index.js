import { toPaths, toMetadata, toExport } from './util'

const indexRegExp = /\/index\.js$/
export default function getTransform (options = {}) {
  const { include = ['*'], exclude = ['index.js'] } = options

  return ({ id }) => {
    const dir = id.replace(indexRegExp, ''),
          paths = toPaths({ dir, include: resolveAsArray(include), exclude: resolveAsArray(exclude) }),
          withMetadata = toMetadata({ dir, paths }),
          exports = withMetadata.map(toExport).join('\n')
    
    return exports
  }
}

function resolveAsArray (stringOrArray) {
  return Array.isArray(stringOrArray) ? stringOrArray : [stringOrArray]
}