import './App.css';
import { BrowserRouter, Route, Routes, Link, useSearchParams, useParams } from 'react-router-dom';
import { Content } from './components/content';
import { Home } from './components/home';
import { NotFound } from './components/not_found';

function App() {
  return (
    <>
    <BrowserRouter>
      <h1>Hello world</h1>
      <menu>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/content">Content</Link></li>
        <li><Link to="/article/8">Article(8番目)</Link></li>
        <li><Link to="/search?page=9">Search(9番目)</Link></li>
      </menu>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/article' element={<Article />} >
          <Route path=':id' element={<Article />} />
        </Route>
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

function Article() {
  const params = useParams();
  return(
    <>
    <h2>Article</h2>
    { params.id ?
        <p>この記事は{ params.id }番目を表示しています</p> :
        <p>記事番号が設定されていません</p>
    }
    </>
  )
}

function Search() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  return(
    <>
    <h2>Search</h2>
    { page ?
      <p>検索画面の{ page }ページ目を表示しています</p> :
      <p>ページ番号が設定されていません</p>
    }
    </>
  )
}

export default App;
