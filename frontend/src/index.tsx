import ReactDOM from 'react-dom';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import PhonesPage from './PhonesPage';
import PageNotFound from './PageNotFound';
import Menu from './Menu';
import { App } from './App';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Homepage</h1>} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
