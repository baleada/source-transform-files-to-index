export default function toImport (fileMetadata) {
  const { name, extension, relativePathFromIndex } = fileMetadata
  return `export { default as ${name} } from '${relativePathFromIndex}${name}.${extension}'`
}