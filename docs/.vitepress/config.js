import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Payless Health',
  description: 'Why pay more?',
  base: '/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/payless.health-favicon-196x196.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9G86ZZP32Y' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9G86ZZP32Y');`
    ]
  ],
  
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
      { text: 'About', link: '/about' },
      { text: 'Donate', link: '/donate' },
      { text: 'Volunteer', link: '/volunteer' },
      { text: 'Services', link: '/services' },
      { text: 'Hospital Prices', 
        items: [
          { text: 'Mount Sinai', link: '/hospital/mount-sinai' },
          { text: 'St Lukes (Bethlehem)', link: '/hospital/stlukes-bethlehem' },
        ]
      },
      { text: 'Guidance',
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
      }  
    ],

    sidebar: {
      '/': [
        { text: 'Hospital Prices', link: '/hospital/' },
        { text: 'Guidance', link: '/help/' },
      ],

      '/hospital/': [
        {
          text: 'Hospital Prices',
          collapsed: false,
          items: [
            { text: 'Mount Sinai', link: '/hospital/mount-sinai' },
            { text: 'St Lukes (Bethlehem)', link: '/hospital/stlukes-bethlehem' }
          ],
        },
        {
          text: 'Guidance',
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
        }

      ],

      

      '/help/': [
        {
          text: 'Hospital Prices',
          collapsed: false,
          items: [
            { text: 'Mount Sinai', link: '/hospital/mount-sinai' },
            { text: 'St Lukes (Bethlehem)', link: '/hospital/stlukes-bethlehem' }
          ],
        },
        {
          text: 'Guidance',
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
      { icon: 'github', link: 'https://github.com/onefact/payless.health' },
      { icon: 'twitter', link: 'https://twitter.com/paylesshealth/' }
    ],
    
    editLink: {
        pattern: 'https://github.com/onefact/payless.health/edit/main/docs/:path'
      }
  }
})
