import { writable } from "svelte/store";

const calendar = writable(false)
const menu = writable(false)

export { calendar, menu }