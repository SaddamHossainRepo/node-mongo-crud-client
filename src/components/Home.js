import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`)
        // console.log(agree);

        if (agree) {
            // console.log('deleting user with id:', user._id);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div>
            <h2>users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;