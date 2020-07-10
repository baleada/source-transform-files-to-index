import { readdirSync, lstatSync } from 'fs'
import minimatch from 'minimatch'

export default function toPaths ({ absolutePathToFiles, include }) {
  return readdirSync(absolutePathToFiles)
    .filter(item => minimatch(item, include))
    .reduce((files, item) => {
      item = isFile({ absolutePathToFiles, item }) ? [`${absolutePathToFiles}/${item}`] : toPaths(`${absolutePathToFiles}/${item}`)
      return [
        ...files,
        ...item
      ]
    }, [])
}

function isFile ({ absolutePathToFiles, item }) {
  return lstatSync(`${absolutePathToFiles}/${item}`).isFile()
}
