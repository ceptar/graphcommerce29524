// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
    hygraphEndpoint: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvhbhb63000009ieecbl2zt3/master',
    magentoEndpoint: 'https://nonotheresnolimit.xyz/graphql',
    canonicalBaseUrl: 'http://localhost:3000',
    storefront: [
      { locale: 'en', magentoStoreCode: 'default', defaultLocale: true },
    ],
    productFiltersPro: true,
    productFiltersLayout: 'DEFAULT',
    robotsAllow: false,
  
    demoMode: true,
    limitSsg: true,
  }
  
  module.exports = config