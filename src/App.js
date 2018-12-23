/////////////
// Modules //
/////////////
import React from 'react'
// import { Admin, Resource, ListGuesser } from 'react-admin'
import { Admin, Resource } from 'react-admin'
import { PostList, PostCreate, PostEdit } from './components/posts'

import jsonServerProvider from 'ra-data-json-server'

import { UserList } from './components/users'


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dataProvider={ dataProvider }>
  	
  	<Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } />
    <Resource name="users" list={ UserList } />

  </Admin>
)

export default App