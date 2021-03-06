import { Form, Field } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../graphql/mutations/login';
import './login.css';

const Login = () => {
    const [loginMutation,] = useMutation(LOGIN);
    const navigate = useNavigate();

    return (
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
                email: '',
                password: ''
            }}
            render={({values, handleSubmit, form}) => {

                return (
                    <div>
                        <Field
                            name='email'
                            component='input'
                            placeholder='Email'
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
    )
}

export default Login;