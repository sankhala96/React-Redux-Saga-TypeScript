import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { User } from '../types/userTypes';

type Props = {
    users: User[]
    onDeleteUser: (id: string) => void
}

const UsersList: React.FC<Props> = ({users, onDeleteUser}) => {
    return (
        <ListGroup>
            {users.map((user) => {
                return <ListGroupItem key={user.id}>
                    <section style={{display: 'flex'}}>
                        <div style={{flexGrow: 1}}>
                            {user.firstName} {user.lastName}
                        </div>
                        <div>
                            <Button outline color="danger" onClick={() => onDeleteUser(user.id)}>Delete</Button>
                        </div>
                    </section>
                </ListGroupItem>
            })}
        </ListGroup>
    )
}

export default UsersList;