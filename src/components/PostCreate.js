import React from 'react';
import { Edit, SimpleForm, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
            	<SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);