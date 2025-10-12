import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  tags: string[]
}

export default createContentLoader("**/*.md", {
  includeSrc: true,
  transform(raw) {
    const postMap: Record<string, Post> = {}
    const tagMap: Record<string, string[]> = {}
    
    const posts = raw
      .filter(({ url }) => !url.endsWith('index.md'))
      .map(({ url, frontmatter, src }) => {
        if (!frontmatter) return null

        // 提取一级标题
        const title = src?.match(/^#\s+(.+)$/m)?.[1]?.trim() || frontmatter.title || '无标题'

        // 处理 tags（确保是数组）
        let tags = frontmatter.tags || []
        if (typeof tags === 'string') tags = [tags]

        const postUrl = '/' + url.replace(/\.md$/, '')
        
        const post: Post = { title, url: postUrl, tags }
        postMap[postUrl] = post

        return post
      })
      .filter((post): post is Post => post !== null) // 这里添加类型断言
      .sort((a, b) => a.title.localeCompare(b.title))

    // 构建 tagMap（标签 -> 文章列表）
    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (!tagMap[tag]) tagMap[tag] = []
        if (!tagMap[tag].includes(post.url)) {
          tagMap[tag].push(post.url)
        }
      })
    })

    return { postMap, tagMap }
  }
})