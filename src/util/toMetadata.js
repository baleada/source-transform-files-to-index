import { parse, resolve } from 'path'

export default function toMetadata ({ dir, paths }) {
  const basePath = resolve(''),
        relativePathFromRoot = dir.replace(basePath, '').replace(/^\//, '')

  return paths.map(path => {
    const { name, ext } = parse(path)
    
    return {
      name,
      extension: ext.replace(/^\./, ''),
      relativePathFromIndex: '.' + path.replace(relativePathFromRoot, '').replace(name, '').replace(ext, '')
    }
  })
}
