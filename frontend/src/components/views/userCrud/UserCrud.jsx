import React, { useEffect, useLayoutEffect, useState } from 'react';
import Main from '../../layout/Main';
import axios from 'axios';
import './UserCrud.css';
const headProps = {
    title: 'Crud',
    subTitle: 'Crud home',
    logo: 'users'
}

const baseUrl = 'http://localhost:3001/users';

export default props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [method, setMethod] = useState({method:'post'});
    const [att,setAtt] = useState(0);
    const [data,setData] = useState([]);
    
    const saveNewPeople = () => {
        if (name !== '' && name !== ' ' && email !== '' && email !== ' ' && method.method === 'post') {
            axios.post(baseUrl, { name, email }).then(console.log('Sucess'));
            setAtt(1);
            setName('');
            setEmail('');
            setMethod({method:'post'});
        }
        if(method.method === 'put'){
            axios.put(`${baseUrl}/${method.userId}`, { name, email }).then(console.log('Sucess'));
            setAtt(1);
            setName('');
            setEmail('');
            setMethod({method:'post'});
        }
    }

    const cancelOperation = () =>{
        setMethod('post');
        setName('');
        setEmail('');
        setMethod({method:'post'});
    }

    const editUser = (user) =>{
        setMethod({method:'put',userId:user.id});
        setName(user.name);
        setEmail(user.email);
        setAtt(1);
    }

    const removeUser = (id) =>{
        console.log(id)
        axios.delete(baseUrl + '/' + id).then(console.log('Sucess'));
        setAtt(1);
    }

    function form() {
        return (
            <div className='Form'>
                <div className='Row'>
                    <label>Name</label>
                    <input type='text' className='form-control'
                        name='name' placeholder='Type your name'
                        value={name} onChange={t => setName(t.target.value)}
                    />
                </div>
                <div className='Row'>
                    <label>Email</label>
                    <input type='email' className='form-control'
                        name='email' placeholder='email@test.com'
                        value={email} onChange={t => setEmail(t.target.value)}
                    />
                </div>
                <div className='Row'>
                    <button onClick={() => saveNewPeople()}>Save</button>
                    <button onClick={()=> cancelOperation()}>Cancel</button>
                </div>
            </div>
        );
    }
    
    function Table() {
        return (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='tableButton edit' onClick={() => editUser(user)}>
                                            <i className='fa fa-pencil'></i>
                                        </button>
                                        <button className='tableButton trash' onClick={() => removeUser(user.id)}>
                                        <i className='fa fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        );
    }

    useEffect(() => { 
        if(data !== [])axios.get(baseUrl).then(t => setData(t.data));
        setAtt(0);
        },[att])
    return (
        <Main {...headProps}>
            {form()}
            {Table()}
        </Main>
    );
}