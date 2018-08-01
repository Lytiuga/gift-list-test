import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import { browserHistory } from 'react-router';
import Routes from './routes';

<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
=======
ReactDOM.render(<Routes history={browserHistory} />,
                document.getElementById('root'));
registerServiceWorker();
>>>>>>> b73a7bb7edeabe577ad46b87172660c1cb8e2cc8
