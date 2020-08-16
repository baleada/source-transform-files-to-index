import { parse, resolve } from 'path'
import { clipable } from '@baleada/logic'

export default function toMetadata ({ filesDir, ids }) {
  const basePath = resolve('')

  return ids.map(id => {
    const { name, ext } = parse(id),
          fileRE = new RegExp(`${name}${ext}$`),
          relativeFromRoot = clipable(id)
            .clip(basePath)
            .clip(fileRE)
            .toString(),
          relativeFromIndex = '.' + clipable(id)
            .clip(filesDir)
            .clip(fileRE)
            .toString(),
          absolute = clipable(id)
            .clip(fileRE)
            .toString()

    return {
      name,
      extension: clipable(ext).clip(/^\./).toString(),
      path: {
        relativeFromRoot,
        relativeFromIndex,
        absolute,
      }
    }
  })
}

