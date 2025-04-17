import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Required'),
});

const Login = observer(() => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          // Mock API call
          setTimeout(() => {
            if (values.email === 'user@example.com' && values.password === 'password') {
              enqueueSnackbar('Logged in successfully', { variant: 'success' });
              history.push('/dashboard');
            } else {
              actions.setSubmitting(false);
              enqueueSnackbar('Invalid email or password', { variant: 'error' });
            }
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            <Field name="email" type="email" label="Email" component={TextField} />
            <Field name="password" type="password" label="Password" component={TextField} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default Login;