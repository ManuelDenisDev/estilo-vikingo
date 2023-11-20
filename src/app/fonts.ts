import { Cinzel_Decorative, Noto_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
	variable: '--font-noto-sans',
	display: 'swap',
});
export const cinzelDecorative = Cinzel_Decorative({
	weight: ['400', '700', '900'],
	subsets: ['latin'],
	variable: '--font-cinzel-decorative',
	display: 'swap',
});
