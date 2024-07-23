'use client'

import React from 'react'

import Loader from '../../components/ui/Loader'
import { userProfile } from '../../hooks/userProfile'

export function Statistics() {
	const { data, isLoading } = userProfile()
	return isLoading ? (
		<Loader />
	) : (
		<div className='grid grid-cols-4 gap-12 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map(Statistics => (
					<div
						className='bg-border/5 rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500'
						key={Statistics.label}
					>
						<div className='text-xl'>{Statistics.label}</div>
						<div className='text-3xl'>{Statistics.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}
