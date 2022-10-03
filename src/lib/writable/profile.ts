import { writable } from "svelte/store"

const skill = writable({
    languange: [
        'Php', 'Python', 'Rust Lang', 'Go Lang', 'Javascript/Typescript', 'C#', 'Java', 'Kotlin'
    ],
    framework: [
        'laravel', 'codeIgniter', 'Express', 'ReactJs', 'Svelte', 'Tauri'
    ],
    dataBase: [
        'MySQL', 'SQLite', 'PostgreSQL', 'surrealDB'
    ]
})

export { skill }