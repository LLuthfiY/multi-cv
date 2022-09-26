import { writable } from 'svelte/store'

const zindex = writable(0)
const show_terminal = writable(false)
const show_settings = writable(false)
const show_project = writable(false)

export { zindex, show_project, show_settings, show_terminal }