import React from 'react'

import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin'
import CustomURLField from './CustomUrl'

export const UserList = props => (
	<List {...props}>
		<Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <UrlField source="website" />
            <CustomURLField source="website" />
        </Datagrid>
	</List>
)