import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {

    --sans-serif: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    --serif: 'minion pro',georgia,times,serif;
    --marvin: 'Marvin Visions Big';
    --orbitron: 'Orbitron';
    --code: Menlo, Consolas, monaco, monospace;
    --courier: 'Courier Next', courier, monospace;

    --f1: 3rem;
    --f2: 2rem;
    --f3: 1.5rem;
    --f4: 1.25rem;
    --f5: 1.125rem;
    --f6: 1rem;
    --f7: .875rem;
    --f8: .75rem;

    --lh-solid:   1;
    --lh-title:   1.25;
    --lh-copy:    1.6;

    --space-xxs:  .25rem;
    --space-xs:   .5rem;
    --space-sm:   .75rem;
    --space:      1rem;
    --space-md:   1.25rem;
    --space-lg:   1.5rem;
    --space-xl:   2rem;
    --space-xxl:  3rem;

    --gray-50:    #FAFAFA;
    --gray-6:     #757575;
    --gray-8:     #212121;
    --gray-9:     #333333;

    --orange-6:   #FB8C00;
    --red-6:      #E53935;
    --purple-6:   #8E24AA;
    --indigo-6:   #3949AB;
    --blue-6:     #1E88E5;
    --cyan-6:     #00ACC1;
    --teal-6:     #00897B;
    --green-6:    #43A047;
    --lime-6:     #C0CA33;
    --yellow-6:   #FDD835;
    --amber-6:    #FFB300;
    --deep-orange-6: #F4511E;
    --pink-6: #D81B60;
    --brown-6: #6D4C41;

  }

  body {
    padding: 0;
    margin: 0;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
  }

  h1 {
    font-family: var(--orbitron);
    font-size: var(--f1);
    text-align: center;
  }

  h2,h3,h4,h5,h6 {
    font-family: var(--sans-serif);
    line-height: var(--lh-title);
  }

  h2 {
    font-size: var(--f3);
    margin: calc(var(--space-xxl) * 2) 0 var(--space-lg);
  }

  h3 {
    font-size: var(--f4);
  }

  h4 {
    font-size: var(--f4);
  }

  h5 {
    font-size: var(--f5);
  }

  h6 {
    font-size: var(--f6);
  }

  p,
  li {
    font-family: var(--serif);
    font-size: var(--f4);
    line-height: var(--lh-copy);
  }

  article p {
    margin: 0 0 var(--space-lg);
  }

  ol,
  ul {
    padding: 0;
    margin: 0 0 var(--space);
  }

  blockquote p,
  article section blockquote p:only-child {
    font-size: var(--f1);
    font-family: var(--orbitron);
    line-height: var(--lh-title);
    padding-left: 5rem;
    color: var(--gray-6);
    margin: var(--space-xxl) auto;
    background: #8A2387;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  article {
    position: relative;
  }

  article:first-child h3 a {
    color: var(--orange-6);
  }

  article:nth-child(2) h3 a {
    color: var(--red-6);
  }

  article:last-child h3 a {
    color: var(--purple-6);
  }

  big {
    display: block;
    font-size: var(--f1);
    font-family: var(--orbitron);
    font-weight: 500;
    margin-bottom: var(--space-lg);
  }

  code {
    font-family: var(--code);
  }

  pre {
    position: relative;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-size: var(--f7)!important;
    border-radius: 4px;
  }
  pre[class*="language-"] {
  	padding: var(--space-lg)!important;
  }
`;
