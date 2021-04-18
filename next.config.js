module.exports = {
    async redirects() {
      return [
        {
          source: '/r',
          destination: '/resume',
          permanent: true,
        },
      ]
    },
  }
  