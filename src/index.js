import { toPaths, toWithMetadata, toImport, toRoute } from './util'

export default function getTransform (absolutePathToFiles, include = '*') {
  const paths = toPaths({ absolutePathToFiles, include }),
        withMetadata = toWithMetadata({ absolutePathsToFiles, paths }),
        exports = withMetadata.map(toExport).join('\n')
  
  return () => exports
}
