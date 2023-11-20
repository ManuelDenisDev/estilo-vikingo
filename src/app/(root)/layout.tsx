import type { Metadata } from 'next';
import { notoSans } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
	title: 'Estilo Vikingo',
	description: 'Sitio web diseñado y desarrollado por Manuel Denis Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body
				className={`${notoSans} antialiased text-texto-100 bg-white flex flex-col min-h-screen`}>
				{children}
			</body>
		</html>
	);
}
