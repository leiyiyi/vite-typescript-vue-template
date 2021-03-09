/**
 * 工厂方法创建App
 */
import {
  createApp,
  h,
  VNode,
  App,
  Component,
  Directive,
  Plugin
} from 'vue'

let bool1: boolean = true
let num1: number | string = 1
let str1: string = 'a'
let null1: null = null
let undef1: undefined = undefined

let arr1: (number | string)[] = [1, 2, 3, '4']
let arr2: Array<number | string> = [1, 2, 3, '4']

let tuple1: [number, string] = [1, '1']
let tuple2: [number, string, ...any] = [1, '1', 3, true]

const map1: Map<string, any> = new Map()

interface Params {
  readonly globalProperties?: null | Map<string, any>
  readonly components?: null | Map<string, Component>
  readonly directives?: null | Map<string, Directive>
  readonly plugins?: null | [Plugin]
  readonly root: VNode
}

const createMyApp = (
  {
    globalProperties,
    components,
    directives,
    plugins,
    root,
  }: Params,
): App => {
  const app = createApp({
    render: () => h(root),
  })
  if (globalProperties) {
    globalProperties.forEach((val: string, key: any) => {
      app.config.globalProperties[key] = val
    })
  }
  if (components) {
    components.forEach((val: Component, key: string) => {
      app.component(key, val)
    })
  }
  if (directives) {
    directives.forEach((val: Directive, key: string) => {
      app.directive(key, val)
    })
  }
  if (plugins) {
    plugins.forEach((plugin: Plugin) => {
      app.use(plugin)
    })
  }
  // app.config.errorHandler = (err, vm, info) => {
  //   // handle error
  //   // `info` is a Vue-specific error info, e.g. which lifecycle hook
  //   // the error was found in
  // }
  // app.config.warnHandler = function(msg, vm, trace) {
  //   // `trace` is the component hierarchy trace
  // }
  return app
}

export default createMyApp
