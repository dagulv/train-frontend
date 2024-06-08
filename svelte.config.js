import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `
			@import 'src/styles/config/breakpoints.scss';
			@import 'src/styles/config/variables.scss';`
		}
	}),
	alias: {
		'lib': path.resolve('./src/lib'),
		'components': path.resolve('./src/components'),
	},
	kit: {
		adapter: adapter({
			fallback: 'index.html',
		}),

	}
};

export default config;
