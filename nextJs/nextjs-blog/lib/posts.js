import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function getSortedPostsData () {
  // Get filenames under the posts directory
  const fileNames = fs.readdirSync(postsDir)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace('/\.md$/', '')

    // Read markdown file
    const longFileName = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(longFileName, 'utf8')

    // use gray matter to parse the meta data contents
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  allPostsData.sort((a, b) => (
    a.date > b.date ? a : b
  ))

  return allPostsData
}
