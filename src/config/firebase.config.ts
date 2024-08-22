import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_ENV_FIREBASE_API,
	authDomain: process.env.NEXT_PUBLIC_ENV_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_ENV_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_ENV_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_ENV_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_ENV_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_ENV_FIREBASE_MEASUREMENT_ID
}

export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)

export const googleAuthProvider = new GoogleAuthProvider()
// googleAuthProvider.addScope(`${process.env.NEXT_PUBLIC_ENV_FIREBASE_SCOPES}`)
