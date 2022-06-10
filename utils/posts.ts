import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { PostsData } from '../types/data'
import { remark } from 'remark'
import html from 'remark-html'

const postDirPath = path.join(process.cwd(), 'posts')

export default function getSortedPostsData(): PostsData[] {

    const postFilePaths = fs.readdirSync(postDirPath)

    const postsDataList: PostsData[] = postFilePaths
        .map(postFilePath => {

            const id = postFilePath.replace(/\.md$/, '')

            const fullPath = path.join(postDirPath, postFilePath)

            const fileContent = fs.readFileSync(fullPath, 'utf-8')

            const { data, content } = matter(fileContent)

            return {
                id,
                title: data.title,
                date: data.date,
                content
            }
        })

    return postsDataList.sort((a, b)=> {
        if(a.date > b.date) return 1
        if(a.date < b.date) return -1
        if(a.date === b.date) return 0
    })
}

export function getAllPostsIds () {
    const fileNames = fs.readdirSync(postDirPath)

    return fileNames.map(filename => {
        return ({
            params: {
                id: filename.replace(/\.md$/, '')
            }
        })
    })
}

export async function getPostData (id: string): Promise<PostsData & {contentHtml: string}> {
    const fullPath = path.join(postDirPath, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const { data, content } = matter(fileContents)

    const proceccedContent = await remark()
        .use(html)
        .process(content)

    const contentHtml = proceccedContent.toString()

    return {
        id,
        title: data.title,
        date: data.date,
        content,
        contentHtml
    }
}