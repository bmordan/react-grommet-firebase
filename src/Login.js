import React from 'react'
import { Form, FormField, TextInput, Box, Button, Card } from 'grommet'
import {User} from './models'

function CreateUserForm() {
	const [value, setValue] = React.useState({name: "", email: "", password: ""});
	return (
		<Form
			value={value}
			onChange={nextValue => setValue(nextValue)}
			onReset={() => setValue({name: "", email: "", password: ""})}
			onSubmit={({ value }) => {
				User.create(value)
				setValue({name: "", email: "", password: ""})
			}}
		>
			<FormField name="name" htmlfor="name" label="Name">
				<TextInput id="name" name="name" />
			</FormField>
			<FormField name="email" htmlfor="email" label="Email">
				<TextInput id="email" name="email" type="email" />
			</FormField>
			<FormField name="password" htmlfor="password" label="Password">
				<TextInput id="password" name="password" type="password" />
			</FormField>
			<Box direction="row" gap="medium">
				<Button type="submit" primary label="Submit" />
				<Button type="reset" label="Reset" />
			</Box>
		</Form>
	);
}

function SignInUser () {
	const [value, setValue] = React.useState({email: "", password: ""});
	return (
		<Form
			value={value}
			onChange={nextValue => setValue(nextValue)}
			onSubmit={({ value }) => {
				User.signIn(value)
				setValue({email: "", password: ""})
			}}
		>
			<FormField name="email" htmlfor="email" label="Email">
				<TextInput id="email" name="email" type="email" />
			</FormField>
			<FormField name="password" htmlfor="password" label="Password">
				<TextInput id="password" name="password" type="password" />
			</FormField>
			<Box direction="row" gap="medium">
				<Button type="submit" primary label="Signin" />
			</Box>
		</Form>
	);	
}

function Login() {
	return (
		<Card pad="medium" width="medium">
			<CreateUserForm />
			<SignInUser />
		</Card>
	)
}

export default Login