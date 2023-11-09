'use strict';

module.exports.plugins = [
  'remark-preset-lint-recommended',
  'remark-preset-lint-consistent',
  // 'remark-lint-blank-lines-1-0-2', // buggy
  // ['remark-lint-code', {
  //   js: 'remark-lint-code-eslint',
  // }],
  // 'remark-lint-no-empty-sections',
  'remark-lint-heading-whitespace',
  'remark-lint-no-url-trailing-slash',
  'remark-validate-links',
  // 'lint-match-punctuation', // doesn't work
];
