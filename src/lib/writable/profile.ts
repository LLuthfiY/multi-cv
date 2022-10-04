import { writable } from "svelte/store"

const skill = writable({
    languange: [
        'Php', 'Python', 'Rust Lang', 'Go Lang', 'Javascript/Typescript', 'C#', 'Java', 'Kotlin'
    ],
    framework: [
        'Laravel', 'CodeIgniter', 'Express', 'ReactJs', 'Svelte', 'Tauri'
    ],
    dataBase: [
        'MySQL', 'SQLite', 'PostgreSQL', 'SurrealDB'
    ]
})

const project = writable([
    {
        name: 'MangaReader UWP',
        md: 'https://raw.githubusercontent.com/LLuthfiY/SimpleMangaReaderUWP/master/README.md',
        url: 'https://github.com/LLuthfiY/SimpleMangaReaderUWP',
        tags: ['application']
    },
    {
        name: 'MangaReader Tauri',
        md: 'https://raw.githubusercontent.com/LLuthfiY/manga-reader/master/README.md',
        url: 'https://github.com/LLuthfiY/manga-reader',
        tags: ['application']
    },
    {
        name: 'dafpath',
        url: 'https://github.com/LLuthfiY/defpath',
        md: 'https://raw.githubusercontent.com/LLuthfiY/defpath/master/readme.md',
        tags: ['application']
    },
    {
        name: 'Pixel_Art with Palette',
        url: 'https://github.com/LLuthfiY/Pixel_Art_With_Palette',
        md: 'https://raw.githubusercontent.com/LLuthfiY/Pixel_Art_With_Palette/main/README.md',
        tags: ['computer vision']
    },
    {
        name: 'My Fake API',
        url: 'https://github.com/LLuthfiY/myfakeapi',
        md: 'https://raw.githubusercontent.com/LLuthfiY/myfakeapi/main/README.md',
        tags: ['web', 'api']
    }
])
interface BoolByString {
    [key: string]: boolean | undefined
}

const tempTags: BoolByString =
{
    application: true,
    'computer vision': true,
    web: true,
    api: true
}


const tags = writable(tempTags)

export { skill, project, tags }