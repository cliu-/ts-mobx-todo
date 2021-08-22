import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { RootStore, Todo } from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const testAppStore = new RootStore(
    ['monster', 'boss black', 'caffe latte'].map((text) => new Todo(text))
  );

  ReactDOM.render(
    <Router>
      <Route path="/">
        <App appStore={testAppStore} />
      </Route>
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
