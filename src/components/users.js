import React from 'react'

import { List, Datagrid, TextField, EmailField } from 'react-admin'
import CustomURLField from './CustomUrl'

export const UserList = props => (
	<List {...props}>
		<Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" /> 
            <TextField source="address.street" />
            <CustomURLField source="website" />
        </Datagrid>
	</List>
)