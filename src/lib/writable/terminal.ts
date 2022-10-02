import { writable } from "svelte/store";

const globalCommand = writable('')
const lines = writable([''])
export { globalCommand, lines }