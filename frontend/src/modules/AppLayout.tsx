import { Layout } from 'antd';
import SideNav from 'components/SideNav';
import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import TopNav from './Nav/TopNav';
import { useRoute } from './RouteProvider';

const { Content, Footer } = Layout;

interface BaseLayoutProps {
	children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	const location = useLocation();
	const { dispatch } = useRoute();
	const currentYear = new Date().getFullYear();

	useEffect(() => {
		dispatch({ type: 'ROUTE_IS_LOADED', payload: location.pathname });
	}, [location, dispatch]);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<SideNav />
			<Layout className="site-layout">
				<Content style={{ margin: '0 16px' }}>
					<TopNav />
					{children}
				</Content>
				<Footer style={{ textAlign: 'center', fontSize: 10 }}>
					SigNoz Inc. ©{currentYear}
				</Footer>
			</Layout>
		</Layout>
	);
};

export default BaseLayout;
