module.exports = {
  siteMetadata: {
    title: 'Orga',
    titleTemplate: '%s | orga.js.org',
    description: 'org-mode + JavaScript = 🚀',
    url: 'orga.js.org',
    image: '/images/logo.png',
    twitterUsername: '@xiaoxinghu',
  },
  // flags: {
  //   DEV_SSR: false,
  //   FAST_DEV: false,
  //   PRESERVE_FILE_DOWNLOAD_CACHE: false,
  //   PARALLEL_SOURCING: false,
  //   LMDB_STORE: false,
  // },
  plugins: [
    {
      resolve: 'gatsby-theme-orga-docs',
      options: {
        locations: ['../docs'],
        components: {
          Space: require.resolve('./src/components/space.tsx'),
          Notice: require.resolve('./src/components/notice.tsx'),
          pre: require.resolve('./src/components/code-block.tsx'),
          code: require.resolve('./src/components/code.tsx'),
        },
      },
    },
  ],
};