import React, { PropsWithChildren } from 'react'

import DashBoardLayout from '../../components/dashboard-layout/DashBoardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashBoardLayout>{children}</DashBoardLayout>
}
