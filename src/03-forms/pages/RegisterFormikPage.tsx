import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput } from '../components'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password1: "",
                    password2: "",
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Debe de tener más de 2 caracteres')
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido')
                    ,
                    email: Yup.string()
                        .email('El correo no tiene un formato válido')
                        .required('Requerido'),
                    password1: Yup.string()
                        .min(6, 'Debe de tener más de 6 caracteres')
                        .required('Requerido'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], "las contraseñas deben ser iguales")
                        .required('Requerido')

                })}
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label='Name'
                            name='name'
                            placeholder='nombre'
                        />

                        <MyTextInput
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='ejemplo@google.com'
                        />

                        <MyTextInput
                            label='Password'
                            name='password1'
                            type='password'
                            placeholder='Password'
                        />

                        <MyTextInput
                            label='Confirm Password'
                            name='password2'
                            type='password'
                            placeholder='Repeat Password'
                        />

                        <button type='submit'>Create</button>
                        <button type='button' onClick={handleReset}>Reset</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}
