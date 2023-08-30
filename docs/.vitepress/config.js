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
      copyright: 'Released under the Apache 2.0 License and Creative Commons CC BY-SA 4.0 license. Copyright © 2023-Present One Fact Foundation.'
    },

    search: {
      provider: "local"
    },

    nav: [
      { text: 'About', link: '/about' },
      { text: 'Donate', link: '/donate' },
      { text: 'Volunteer', link: '/volunteer' },
      { text: 'Services', link: '/services' },
      { text: 'Data', link: '/data' },
      { text: 'Media', link: '/media' },
    ],

    sidebar: {
      '/': [
        { text: 'Hospital Prices', link: '/hospital/' },
        { text: 'Maps of Hospitals', link: '/maps' },
        { text: 'Resources', link: '/help/' },
        { text: 'Data', link: '/data' },
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
        { text: 'Maps of Hospitals', link: '/maps' },
        {
          text: 'Resources',
          collapsed: true,
          items: [
            { text: 'Lowering costs through governments & businesses', link: '/help/lowering-costs-through-governments-and-businesses' },
            { text: 'Understanding your insurance policy', link: '/help/understanding-your-insurance-policy' },
            { text: 'Cheaper prescriptions', link: '/help/cheaper-prescriptions' },
            { text: 'Patient-centered mindset', link: '/help/embracing-a-patient-centered-mindset' },            
            { text: 'Finding a therapist', link: '/help/finding-a-therapist' },            
            { text: 'Advocacy & children', link: '/help/supporting-health-care-self-advocacy-in-children' }, 
            { text: 'Shared decision making', link: '/help/shared-decision-making' },
            { text: 'Cancer checklist', link: '/help/cancer-checklist' },
            { text: 'Your support network', link: '/help/your-personal-support-network' },
            { text: 'Advocating for yourself in primary care', link: '/help/advocating-for-yourself-in-primary-care' },
            { text: 'Preparing for surgery', link: '/help/preparing-for-surgery' },
            { text: 'Understanding hospitalization', link: '/help/understanding-hospitalizations' },
            { text: 'Utilizing free clinics and community health centers', link: '/help/free-clinics-and-community-health-centers' },
            { text: 'Contributing', link: '/help/contributing' },
          ],
        },
        { text: 'Data', link: '/data' },
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
        { text: 'Maps of Hospitals', link: '/maps' },
        {
          text: 'Resources',
          collapsed: false,
          items: [
            { text: 'Lowering costs through governments & businesses', link: '/help/lowering-costs-through-governments-and-businesses' },
            { text: 'Understanding your insurance policy', link: '/help/understanding-your-insurance-policy' },
            { text: 'Cheaper prescriptions', link: '/help/cheaper-prescriptions' },
            { text: 'Patient-centered mindset', link: '/help/embracing-a-patient-centered-mindset' },            
            { text: 'Finding a therapist', link: '/help/finding-a-therapist' },            
            { text: 'Advocacy & children', link: '/help/supporting-health-care-self-advocacy-in-children' }, 
            { text: 'Shared decision making', link: '/help/shared-decision-making' },
            { text: 'Cancer checklist', link: '/help/cancer-checklist' },
            { text: 'Your support network', link: '/help/your-personal-support-network' },
            { text: 'Advocating for yourself in primary care', link: '/help/advocating-for-yourself-in-primary-care' },
            { text: 'Preparing for surgery', link: '/help/preparing-for-surgery' },
            { text: 'Understanding hospitalization', link: '/help/understanding-hospitalizations' },
            { text: 'Utilizing free clinics and community health centers', link: '/help/free-clinics-and-community-health-centers' },
            { text: 'Contributing', link: '/help/contributing' },
          ],
        },
        { text: 'Data', link: '/data' },
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
