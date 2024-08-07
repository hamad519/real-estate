import React from 'react'
import HeroBlogDetail from '../components/HeroBlogDetail'
import BlogDetailContainer from '../components/BlogDetailContainer'
import RelatedBlogDetail from '../components/RelatedBlogDetail'

const BlogDetail = () => {
  return (
    <>
    <HeroBlogDetail/>
    <BlogDetailContainer/>
    <RelatedBlogDetail/>
    </>
  )
}

export default BlogDetail