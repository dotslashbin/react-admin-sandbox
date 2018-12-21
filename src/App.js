/////////////
// Modules //
/////////////
import React from 'react'
// import { Admin, Resource, ListGuesser } from 'react-admin'
import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin'
import { PostList } from './components/PostList'
import { PostEdit } from './components/PostEdit'
import { PostCreate } from './components/PostCreate'

import jsonServerProvider from 'ra-data-json-server'

import { UserList } from './components/users'


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dataProvider={ dataProvider }>
  	
  	<Resource name="posts" list={ PostList } edit={ EditGuesser } />
    <Resource name="users" list={ UserList } />

  </Admin>
)

export default App