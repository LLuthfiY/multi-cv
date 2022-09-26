import { writable } from "svelte/store";

const isHover = writable(false)
const x = writable(0)
const y = writable(0)
const title = writable("")

export { isHover, x, y, title }