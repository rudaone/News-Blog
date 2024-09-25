import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './SimilarArticles.css';
import { IArticle } from '../../types';
import { Article } from '../Articles/Article';
import { loadArticles } from '../redux/actionCreators/articlesActionCreators';

interface ArticleSliderProps {
  articles: IArticle[];
}

const ArticleSimilar: React.FC<ArticleSliderProps> = ({ articles }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadArticles({}))
  }, [])

  return (
    <div className="slider">

      <div className="slider-body">
        <div className="slider-wrapper">
          <ul className="slider-line">
            {articles.slice(0,3).map(article => (
              
              <li key={article.id} className="slider-item">
                <Link to={`articles/${article.id}`} style={{ textDecoration: 'none' }}>
                  <Article
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    image_url={article.image_url}
                    news_site={article.news_site}
                    summary={article.summary}
                    published_at={article.published_at}
                    updated_at={article.updated_at}
                    featured={article.featured}
                  />

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleSimilar;
