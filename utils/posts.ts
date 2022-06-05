import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { PostsData } from '../types/data'

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