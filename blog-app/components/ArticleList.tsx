import React from 'react'
import { IArticle } from '../types';
import BlogCard from './BlogCard';
import BlogCardWithImage from './BlogCardWithImage';


interface IPropType {
    articles: IArticle[];
}
const ArticleList = ({ articles}: IPropType) => {
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
        {
            articles.map((article, idx) => {
                return (
                  <div key={article.id}>
                    {
                      idx === 1 
                      ? (<BlogCardWithImage article={article}  />)             // for special card
                      : (<BlogCard article={article} />)     // normal card
                    }
                  </div>
                )
            })
        }
    </div>
  )
}

export default ArticleList