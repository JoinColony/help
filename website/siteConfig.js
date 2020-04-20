/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
/*
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/colony_social_card.png',
    infoLink: 'https://colony.io',
    pinned: true,
  },
*/
];

const siteConfig = {
  title: 'Colony Help', // Title for your website.
  tagline: 'Looking for help?',
  //   url: 'https://help.colony.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://help.colony.io',

  // Used for publishing and more
  projectName: 'help',
  organizationName: 'joincolony',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://colony.io', label: 'Colony'},
    {href: 'https://blog.colony.io', label: 'Blog'},
    {href: 'https://colony.io/connect', label: 'App'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logomark_white.svg',
  footerIcon: 'img/logomark_white.svg',
  favicon: 'img/logomark_white.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#00284B',
    secondaryColor: '#289BDC',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Avenir Next",
      "system-ui"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Colony`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/colony_social_card.png',
  twitterImage: 'img/colony_social_card.png',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: 'b75b1d2458bdc0cff7417cac43735c06',
    indexName: 'joincolony',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;