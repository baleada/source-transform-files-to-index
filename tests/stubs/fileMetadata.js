import { resolve } from 'path'
const basePath = resolve('')

export const topLevel = {
  name: 'Baleada',
  extension: 'js',
  path: {
    relativeFromRoot: '',
    relativeFromIndex: './',
    absolute: `${basePath}/`,
  }
}

export const nested = {
  name: 'Baleada',
  extension: 'js',
  path: {
    relativeFromRoot: '/nested/',
    relativeFromIndex: './nested/',
    absolute: `${basePath}/nested/`,
  }
}
