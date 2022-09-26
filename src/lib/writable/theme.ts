import { writable } from 'svelte/store'

interface StringbyString {
    [key: string]: string | undefined
}
const tempAccent: StringbyString = {
    red: '#ef4444',
    blue: '#3b82f6',
    orange: '#f97316',
    lime: '#84cc16',
    green: '#22c55e',
    teal: '#14b8a6',
    sky: '#0ea5e9',
    indigo: '#6366f1',
    pink: '#ec4899',
    emerald: '#10b981',
    rose: '#e11d48',
    purple: '#7e22ce',
    white: '#f1f5f9',
    black: '#334155',
    gray: '#64748b'
}

const darkTheme = writable(false)
const accent = writable(tempAccent)
const selectedAccent = writable('red')
const wallpaper = writable('/woodHouse.jpg')
const wallpaperSize = writable('cover')
const wallpaperX = writable('center')
const wallpaperY = writable('center')
const wallpaperRepeat = writable('no-repeat')
export { darkTheme, accent, selectedAccent, wallpaper, wallpaperSize, wallpaperX, wallpaperY, wallpaperRepeat }
