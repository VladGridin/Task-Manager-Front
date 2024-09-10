'use client'

import { useMutation } from '@tanstack/react-query'
import { getAuth, getIdToken, signInWithPopup, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { IGoogleFirebase } from '@/types/auth.types'

import { app, googleAuthProvider } from '@/config/firebase.config'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

export const AuthByFirebase = () => {
	const [userToken, setUserToken] = useState('')
	const auth = getAuth(app)
	auth.languageCode = 'it'

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['Auth By Google'],
		mutationFn: (data: IGoogleFirebase) => authService.GoogleAuth(data),
		onSuccess() {
			toast.success('Successfully login!')
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const googleAuth = () => {
		signInWithPopup(auth, googleAuthProvider)
			.then(res => {
				console.log(res)
				getIdToken(res.user)
					.then(data => {
						console.log(data)
						setUserToken(data)
						mutate({
							UserId: data
						})
					})
					.catch(err => console.log(err))
			})
			.catch(err => {
				console.log(err)
			})
	}

	const googleLogout = () => {
		signOut(auth)
			.then(() => console.log('success'))
			.catch(err => console.log(err))
	}

	return {
		googleAuth
	}
}
