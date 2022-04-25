/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 解析器parse
  const ast = parse(template.trim(), options)
  console.log( ast )
  if (options.optimize !== false) {
    // 优化器optimize
    optimize(ast, options)
    console.log(template.trim(), ast, optimize(ast, options))
  }
  // 代码生成器
  const code = generate(ast, options)
  console.log(ast, code, 'compiler-code')
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
