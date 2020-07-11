import { fileNameRegExp, fileExtensionRegExp } from '../constants'

export default function toMetadata ({ dir, paths }) {
  return paths.map(path => ({
    name: path.match(fileNameRegExp)[1],
    extension: path.match(fileExtensionRegExp)[1],
    relativePathFromIndex: '.' + path.replace(dir, '').replace(fileNameRegExp, '').replace(fileExtensionRegExp, ''),
  }))
}