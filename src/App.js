import React from 'react';
import Layout from './components/layout';
import UsersContainer from './container/users';

import { Route, Switch } from 'react-router';
function App() {
  return (
   <div>
     <Layout>
       <Switch>
         <Route exact path="/" children={ () => <div style={{textAlign: 'center', color: '#214796'}}><h2>Welcome to My Blogs</h2></div>}/>
         <Route path="/users/:userId/posts" children={() => <div>POSTS</div>}/>
         <Route path="/users/:userId" children={() => <div>USER DETAILS</div>}/>
         <Route path="/users" component={UsersContainer}/>

       </Switch>
       
     </Layout>
   </div>
  );
}

export default App;
