module.exports = {
	postcss: {
		plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
	},
	themeConfig: {
		nav: [{ text: 'Home', link: '/' }, { text: 'Docs', link: '/docs/en/introduction' }],
		sidebar: {
			'/docs/': [
				'/docs/en/introduction',
				{
					title: 'Elements/ActionBar',
					collapsable: false,
					children: [
						'/docs/en/elements/action-bar/action-bar',
						'/docs/en/elements/action-bar/action-item',
						'/docs/en/elements/action-bar/navigation-button',
					],
				},
				{
					title: 'Elements/Components',
					collapsable: false,
					children: ['/docs/en/elements/components/activity-indicator'],
				},
			],
		},
	},
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'en-US', // this will be set as the lang attribute on <html>
			title: 'VuePress',
			description: 'Vue-powered Static Site Generator',
		},
	},
};
