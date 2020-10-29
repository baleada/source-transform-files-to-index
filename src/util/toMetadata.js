import { parse, resolve } from 'path'

export default function toMetadata ({ filesDir, ids }) {
  const basePath = resolve('')

  return ids.map(id => {
    const { name, ext } = parse(id),
          fileRE = new RegExp(`${name}${ext}$`),
          relativeFromRoot = id
            .replace(basePath, '')
            .replace(fileRE, ''),
          relativeFromIndex = '.' + id
            .replace(filesDir, '')
            .replace(fileRE, ''),
          absolute = id
            .replace(fileRE, '')

    return {
      name,
      extension: ext.replace(/^\./, ''),
      path: {
        relativeFromRoot,
        relativeFromIndex,
        absolute,
      }
    }
  })
}

