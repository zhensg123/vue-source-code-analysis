import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
// 构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  console.log(this, 'thishishis')
  // _代表内部属性，初始化逻辑
  this._init(options)
}

// 混入_init
initMixin(Vue)
// 混入state
stateMixin(Vue)
// 混入events
eventsMixin(Vue)
// 混入生命周期
lifecycleMixin(Vue)
// 混入渲染函数
renderMixin(Vue)

export default Vue
