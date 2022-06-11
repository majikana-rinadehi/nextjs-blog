/**
 * PostsData
 */
export interface PostsData {
    /**
     * *id* of the post
     * @example 'pre-rendering'
     */
    id: string,
    /**
     * *title* written in top of the post file
     * @example 'Two Forms of Pre-rendering'
     */
    title: string,
    /**
     * *markdown* content of the post file
     */
    content: string,
    /**
     * *date* written in top of the post file
     * @example '2020-01-01'
     */
    date: string
}