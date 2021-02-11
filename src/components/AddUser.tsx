import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {User} from '../types/userTypes'

type Props = {
    submitForm: (user: User) => void
}

const stateData = {
    id: '',
    firstName: '',
    lastName: ''
}

const AddUser: React.FC<Props> = ({ submitForm }) => {
    const [formData, updateData] = useState<User>(stateData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof User;
        const value = e.target.value;
        const data = Object.assign({}, formData)

        data[name] = value 
        updateData(data);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm(formData);
        updateData(stateData);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input name="firstName" placeholder='First Name' onChange={handleChange} value={formData.firstName} />
            </FormGroup>
            <FormGroup>
                <Label>Last Name</Label>
                <Input name="lastName" placeholder='First Name' onChange={handleChange} value={formData.lastName} />
            </FormGroup>
            <FormGroup>
                <Button block outline type='submit' color='primary'>
                    Create
                </Button>
            </FormGroup>
        </Form>
    )
}

export default AddUser;