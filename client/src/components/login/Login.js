import { Form, Field } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Nav from "../nav/Nav";
import { LOGIN } from '../../graphql/mutations/login';
import './login.css';

const Login = () => {
    const [loginMutation,] = useMutation(LOGIN);
    const navigate = useNavigate();

    return (
        <>
            <Nav />
            <h1>Login</h1>
            <Form
                onSubmit={async (values) => {
                    await loginMutation({
                        variables: {
                            ...values,
                        },
                        onCompleted: (data) => {
                            console.log(data);
                            localStorage.setItem('token', data?.login?.token);
                            navigate('/home');
                        }
                    });
                }}
                initialValues={{
                    username: '',
                    password: ''
                }}
                render={({values, handleSubmit, form}) => {

                    return (
                        <div>
                            <Field
                                name='username'
                                component='input'
                                placeholder='Username'
                            />
                            <Field 
                                name='password'
                                component='input'
                                type='password'
                                placeholder='Password'
                            />
                            <button 
                                type="submit"
                                onClick={async () => {
                                    await handleSubmit();
                                    form.reset();
                                }}>
                                Login
                            </button>
                        </div>
                    )
                }}
            />
        </>
    )
}

export default Login;