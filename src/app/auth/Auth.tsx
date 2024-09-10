'use client'

import Image from 'next/image'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { useAuth } from './hooks/useAuth'
import { AuthByFirebase } from './hooks/useFirebase'

export default function Auth() {
	const { googleAuth } = AuthByFirebase()
	const { register, handleSubmit, setIsLoginForm, onSubmit } = useAuth()

	return (
		<div className='flex min-h-screen'>
			<div className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' />
					<Field
						id='email'
						label='Email:'
						placeholder='Enter email:'
						type='email'
						extra='mb-4'
						{...register('email', {
							required: 'Email is required!'
						})}
					/>
					<Field
						id='password'
						label='Password:'
						placeholder='Enter password:'
						type='password'
						extra='mb-4'
						{...register('password', {
							required: 'Password is required!'
						})}
					/>

					<div className='flex pt-5 items-center gap-5 justify-center'>
						<Button onClick={() => setIsLoginForm(true)}>Login</Button>
						<Button onClick={() => setIsLoginForm(false)}>Register</Button>
					</div>
				</form>

				<div className='flex pt-5 items-center justify-center'>
					<button
						className='w-9/12 h-12  border rounded-xl border-primary flex items-center'
						onClick={() => googleAuth()}
					>
						<Image
							src='/icons/GoogleIcon.svg'
							// className='pl-5'
							width={50}
							height={50}
							alt='auth by google'
							priority
						/>
						<p className='justify-center mx-auto'>Sign in with Google</p>
					</button>
				</div>
			</div>
		</div>
	)
}
