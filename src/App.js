import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Products from './Pages/Products'
import AdminUpload from './Pages/AdminUpload'
import AdminDelete from './Pages/AdminDelete'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/admin-upload' component={AdminUpload}/>
            <Route exact path='/admin-delete' component={AdminDelete}/>
            <Route exact path='/about' component={AboutUs}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
