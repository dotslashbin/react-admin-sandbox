/////////////
// Modules //
/////////////
import React from 'react'
// import { Admin, Resource, ListGuesser } from 'react-admin'
import { Admin, Resource } from 'react-admin'
import { PostList, PostCreate, PostEdit } from './components/posts'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './components/users'
import authProvider from './components/authProvider'
import Dashboard from './components/Dashboard'
import MyLoginPage from './components/MyLoginPage'

////////////
// Icons  //
////////////
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

/*
const App = () => (
  <Admin dataProvider={ dataProvider }>
  	
  	<Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } icon={PostIcon}/>
    <Resource name="users" list={ UserList } icon={UserIcon}/>

  </Admin>
)*/

const App = () => (
	<Admin loginPage={ MyLoginPage } dashboard={ Dashboard } dataProvider={ dataProvider } authProvider={ authProvider }>
		<Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } icon={PostIcon}/>
    	<Resource name="users" list={ UserList } icon={UserIcon}/>
	</Admin>
)
export default App