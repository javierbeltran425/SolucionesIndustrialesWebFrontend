import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import AdminUpload from './Pages/AdminUpload'
import AdminDelete from './Pages/AdminDelete'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/admin-upload' component={AdminUpload}/>
          <Route exact path='/admin-delete' component={AdminDelete}/>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
