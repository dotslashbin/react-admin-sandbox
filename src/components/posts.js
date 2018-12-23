import React from 'react';
import { Edit, Create, SimpleForm, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput, List, Datagrid, ReferenceField, TextField, EditButton, Filter } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

/**
 * List

 export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        	<DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
            	<SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export const PostList = props => {
    // console.log(props)
    return (
        <List {...props} filters={ <PostFilter /> }>
            <Datagrid>
                
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <TextField source="body" />

                <EditButton />
            </Datagrid>
        </List>
    )
}

/**
 * Edit
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        	<DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
            	<SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

/**
 * Create
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);