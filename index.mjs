#!/usr/bin/env zx

// import 'zx/globals'
import * as zx from 'zx'

const name = await zx.question('What is your name?\n> ')
console.log(`Hello ${name}!`)
