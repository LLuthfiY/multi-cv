import { writable } from 'svelte/store'

let task_stack_temp: string[] = []
const zindex = writable(0)
const show_terminal = writable(false)
const show_settings = writable(false)
const show_project = writable(false)
const show_vs_code = writable(true)
const show_browser = writable(false)
const show_md = writable(false)
const task_stack = writable(task_stack_temp)

export { zindex, show_project, show_settings, show_terminal, show_vs_code, show_browser, show_md, task_stack }