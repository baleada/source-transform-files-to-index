export default function toImport ({ fileMetadata, importType }) {
  const { name, extension, path: { relativeFromRoot, relativeFromIndex, absolute } } = fileMetadata

  let dir
  switch (importType) {
  case 'absolute':
    dir = absolute
    break
  case 'relativeFromIndex':
    dir = relativeFromIndex
    break
  case 'relativeFromRoot':
    dir = relativeFromRoot
    break
  }

  return `export { default as ${name} } from '${dir}${name}.${extension}'`
}
