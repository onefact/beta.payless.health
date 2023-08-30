import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Payless Health',
  description: 'Why pay more?',
  base: '/',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: 'payless.health-logotype-light.svg',
      dark: 'payless.health-logotype-dark.svg',
      alt: 'Payless Health'
    },
    siteTitle: false,

    footer: {
      message: 'Payless Health is sponsored by the Brown Institute at Columbia and Stanford (https://brown.columbia.edu/22-23-magic/) and Patient Rights Advocate (https://www.patientrightsadvocate.org/).',
      copyright: 'Released under the Apache 2.0 License. Copyright © 2023-Present One Fact Foundation.'
    },

    search: {
      provider: "local"
    },

    nav: [
      { text: 'Examples', 
        items: [
          { text: 'Mount Sinai', link: '/examples/mount-sinai' },
          { text: 'St Lukes (Bethlehem)', link: '/examples/stlukes-bethlehem' },
        ]
      },
      { text: 'Help',
        items: [
          { text: 'Your support network', link: '/help/your-personal-support-network' },
          { text: 'Advocacy & children', link: '/help/supporting-health-care-self-advocacy-in-children' }, 
        ]
      }  
    ],

    sidebar: {
      '/': [
        { text: 'Examples', link: '/examples/' },
      ],

      '/examples/': [
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Mount Sinai', link: '/examples/mount-sinai' },
            { text: 'St Lukes (Bethlehem)', link: '/examples/stlukes-bethlehem' }
          ],
        },
      ],

      '/help/': [
        {
          text: 'Help',
          collapsed: false,
          items: [
            { text: 'Patient-centered mindset', link: '/help/embracing-a-patient-centered-mindset' },            
            { text: 'Advocacy & children', link: '/help/supporting-health-care-self-advocacy-in-children' }, 
            { text: 'Shared decision making', link: '/help/shared-decision-making' },
            { text: 'Your support network', link: '/help/your-personal-support-network' },
            { text: 'Advocating for yourself in primary care', link: '/help/advocating-for-yourself-in-primary-care' },
            { text: 'Preparing for surgery', link: '/help/preparing-for-surgery' },
            { text: 'Understanding hospitalization', link: '/help/understanding-hospitalizations' },
            { text: 'Utilizing free clinics and community health centers', link: '/help/free-clinics-and-community-health-centers' },
            { text: 'Understanding your insurance policy', link: '/help/understanding-your-insurance-policy' },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/onefact' },
      { icon: 'twitter', link: 'https://twitter.com/onefact_org/' }
    ]
  }
})
