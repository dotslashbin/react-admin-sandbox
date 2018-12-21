import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        	<DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
            	<SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);