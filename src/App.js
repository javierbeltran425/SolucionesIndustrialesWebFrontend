import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Products from './Pages/Products'
import AdminUpload from './Pages/AdminUpload'
import AdminDelete from './Pages/AdminDelete'
import AboutUs from './Pages/AboutUs'

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
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
