import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import { c as createCommonjsModule, b as commonjsRequire, a as commonjsGlobal } from './_commonjsHelpers-bccf23a2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';
import { d as delay } from './index-94a07eae.js';

var pluralize = createCommonjsModule(function (module, exports) {
/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof commonjsRequire === 'function' && 'object' === 'object' && 'object' === 'object') {
    // Node.
    module.exports = pluralize();
  } else if (typeof undefined === 'function' && undefined.amd) {
    // AMD, registers as an anonymous module.
    undefined(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(commonjsGlobal, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});
});

const SelectCss = ":host {\n  contain: content;\n  --color: var(--black);\n  --border-radius: 0.3rem;\n  --item-size: 5rem;\n  --background: var(--white);\n  --border-color: var(--gray2);\n  --initial-height: calc(var(--item-size) * 6);\n\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  position: relative;\n}\n\n:host(:not(.hydrated)) {\n  display: none;\n}\n\n:host stellar-item,\n:host ::slotted(stellar-item) {\n  --item-size: 5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n:host ::selection,\n:host *::selection {\n  background: var(--theme-base2) !important;\n}\n\n:host *,\n:host *::after,\n:host *::before {\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n:host .select {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n:host .select-title {\n  cursor: pointer;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: 0;\n  width: 100%;\n  height: var(--item-size);\n  overflow: hidden;\n  line-height: 1.4;\n  color: var(--color);\n  font-weight: 500;\n  background: var(--background);\n}\n\n:host([focused]) .select-title,\n:host .select-title:focus,\n:host .wrapper:hover .select-title {\n  border-color: var(--theme-base5);\n  box-shadow: 0 0 0 1px var(--theme-base5);\n}\n\n:host .select-title stellar-item {\n  background: var(--background) !important;\n  color: var(--color) !important;\n}\n\n:host .select-title input {\n  display: none;\n}\n\n:host .select .loading {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: var(--border-radius);\n  height: calc(100% - 2px);\n  width: calc(100% - 2px);\n  z-index: 3;\n  display: grid;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  grid-template-columns: auto auto;\n  grid-gap: 1rem;\n  color: var(--theme-base7);\n  background: rgba(255, 255, 255, 1);\n  animation-name: fadeIn;\n  animation-duration: .0625s;\n  animation-fill-mode: both;\n}\n\n:host([dark]) .select .loading {\n  background: var(--theme-base9);\n  color: var(--theme-base5);\n}\n\n:host .select .loading ion-icon {\n  font-size: 1.6rem;\n}\n\n:host .select-title ion-icon {\n  position: absolute;\n  right: 2rem;\n  transition: transform 100ms var(--ease) 0s;\n  font-size: 1.6rem;\n  color: var(--theme-base5);\n  background: transparent;\n  border: 0;\n}\n\n:host .select-title .button ion-icon {\n  display: none;\n}\n\n:host([open]) .select-title ion-icon {\n  transform: rotate(180deg);\n}\n\n:host .select-list {\n  display: flex;\n  position: relative;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  transform-origin: 50% 0;\n  transition: transform 200ms var(--ease) 350ms, opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms;\n  opacity: 0;\n  z-index: 3;\n  background: var(--background);\n  width: 100%;\n  max-height: 0rem;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  color: var(--theme-base5);\n  border: 1px solid var(--border-color);\n  pointer-events: none;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n  border-radius: var(--border-radius);\n  scroll-snap-type: y mandatory;\n}\n\n:host .select-list ::slotted(*) {\n  scroll-snap-align: start;\n}\n\n:host([resize]) .select-list {\n  resize: both;\n}\n\n:host([resize=\"full\"]) .select-list {\n  max-width: 200vw !important;\n  height: var(--initial-height);\n  max-height: 200vh !important;\n}\n\n:host([resize]) .select-list::after {\n  content: \"\";\n  display: block;\n  height: 1rem !important;\n  max-height: 1rem !important;\n  min-height: 1rem !important;\n  width: 1rem;\n  bottom: 0;\n  right: 0;\n  margin-left: calc(100% - 1rem);\n  cursor: se-resize;\n  position: sticky;\n  background: -moz-linear-gradient(-45deg,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);\n  background: -webkit-linear-gradient(-45deg,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);\n  background: linear-gradient(135deg,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 );\n}\n\n:host .select-list ::slotted(stellar-item) {\n  color: var(--color);\n  border-bottom: 1px solid var(--border-color);\n}\n\n:host .select-list ::slotted(stellar-item:last-child) {\n  border-bottom: none;\n}\n\n:host .label-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n:host .label-wrapper stellar-label {\n  margin-bottom: calc(var(--ms-1) + 1px);\n  height: var(--ms0);\n  line-height: 1.3;\n}\n\n:host .select-list-footer {\n  order: 3;\n  height: 4rem;\n  border-top: 1px solid var(--theme-base5);\n}\n\nstellar-input .validation {\n  margin-bottom: 0;\n  color: var(--red5);\n  font-size: var(--complementing-font-size);\n  font-weight: 500;\n}\n\nstellar-input .validation span {\n  display: block;\n  padding: 1.4rem 0;\n  line-height: 1.4;\n}\n\nstellar-input .validation span + span {\n  border-top: 1px solid var(--border-color);\n}\n\n:host([open]) .select-list,\n:host .select-list:focus-within {\n  transition: transform 200ms var(--ease) 0ms, opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms;\n  opacity: 1;\n  pointer-events: initial;\n  max-height: calc(var(--item-size) * 6.2);\n  overflow-y: auto;\n  border: 1px solid var(--border-color);\n}\n\n/* Size: tiny */\n:host([size=\"tiny\"]) .label-wrapper stellar-label {\n  margin-bottom: var(--ms-2);\n  height: var(--ms-1);\n}\n\n:host([size=\"tiny\"]) .select-title ion-icon {\n  right: 1rem;\n}\n\n:host([size=\"tiny\"]),\n:host([size=\"tiny\"]) stellar-item,\n:host([size=\"tiny\"]) ::slotted(stellar-item) {\n  --font-size: var(--ms-2);\n}\n\n/* Size: Small */\n:host([size=\"small\"]) .label-wrapper stellar-label {\n  margin-bottom: var(--ms-2);\n  height: var(--ms0);\n}\n\n:host([size=\"small\"]) .select-title ion-icon {\n  right: 1rem;\n}\n\n:host([size=\"small\"]) .label {\n  font-size: 0.75rem;\n}\n\n:host([size=\"small\"]),\n:host([size=\"small\"]) stellar-item,\n:host([size=\"small\"]) ::slotted(stellar-item) {\n  --font-size: var(--ms-1);\n}\n\n/* Size: default */\n:host .select-title {\n  height: var(--item-size);\n}\n\n:host .select-title ion-icon {\n  right: 1rem;\n}\n\n:host,\n:host stellar-item,\n:host ::slotted(stellar-item) {\n  --font-size: var(--ms0);\n  --item-size: calc(var(--font-size) * 3.75);\n}\n\n/* Size: Medium */\n:host([size=\"medium\"]) .label-wrapper stellar-label {\n  margin-bottom: var(--ms0);\n  height: var(--ms1);\n}\n\n:host([size=\"medium\"]) .select-title ion-icon {\n  right: 1rem;\n}\n\n:host([size=\"medium\"]) .label {\n  font-size: 0.75rem;\n}\n\n:host([size=\"medium\"]),\n:host([size=\"medium\"]) stellar-item,\n:host([size=\"medium\"]) ::slotted(stellar-item) {\n  --font-size: var(--ms1);\n}\n\n/* Size: Large */\n:host([size=\"large\"]) .label-wrapper stellar-label {\n  margin-bottom: var(--ms-2);\n  height: var(--ms3);\n}\n\n:host([size=\"large\"]) .select-title ion-icon {\n  right: 1rem;\n}\n\n:host([size=\"large\"]) .label {\n  font-size: 0.75rem;\n}\n\n:host([size=\"large\"]),\n:host([size=\"large\"]) stellar-item,\n:host([size=\"large\"]) ::slotted(stellar-item) {\n  --font-size: var(--ms2);\n}\n\n:host([overlay]) .select-list {\n  position: absolute;\n  top: calc(var(--item-size) - 1px);\n}\n\n:host stellar-tooltip {\n  cursor: pointer;\n}\n\n:host stellar-item stellar-tooltip {\n  display: none;\n}\n\n:host .clear-button {\n  --color: var(--red5);\n  --active-color: var(--red7);\n  align-self: baseline;\n}\n\n:host([dark]) {\n  --background: var(--black-alt);\n  --color: var(--white);\n  --border-color: var(--gray9);\n}\n\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n";

const Select = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.loading = false;
        this.fit = false;
        this.wrap = false;
        this.resize = false;
        this.autoSelectFirst = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.blur = 0;
        this.clear_confirm = false;
        this.update = createEvent(this, "update", 7);
    }
    async componentWillLoad() {
        if (this.multiple) {
            this.value = [];
        }
        const options = await this.option_elements();
        // @ts-ignore
        options.forEach((element) => {
            element.selectable = true;
            element.fit = this.fit;
            element.wrap = this.wrap;
            if (this.multiple) {
                element.multiple = true;
            }
        });
    }
    async componentDidLoad() {
        this.listen_to_values();
        this.titleItem = this.element.shadowRoot.querySelector('stellar-item[select-title]');
        if (this.default) {
            if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                this.default.forEach((value) => {
                    // @ts-ignore
                    this.element.querySelector(`stellar-item[value="${value}"]`).select_item({ selected: true });
                });
            }
            else {
                // @ts-ignore
                this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item({ selected: true });
            }
        }
    }
    async clearValue() {
        if (this.clear_confirm) {
            await delay(100);
            this.clear_confirm = false;
            this.value = [];
            const options = await this.option_elements();
            Array.from(options).forEach((element) => {
                element.selected = false;
            });
            this.update.emit(this.value);
        }
        else {
            this.clear_confirm = true;
        }
    }
    async update_values() {
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                if (!option.multiple) {
                    option.multiple = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
            this.update.emit(this.value);
            this.updateLanguage();
        }
        else {
            const options = await this.option_elements();
            if (this.value.length === 0 && this.autoSelectFirst) {
                this.element.querySelector('stellar-item').select_item({ selected: true });
            }
            Array.from(options).forEach(async (el) => {
                if (el.selected) {
                    this.titleItem.apply(await el.data());
                    this.value = el.value;
                    this.update.emit(this.value);
                    this.updateLanguage();
                }
                if (el.selectTitle) {
                    this.value = el.value;
                }
            });
        }
    }
    handleOpenChange() {
        // @ts-ignore
        this.element.shadowRoot.querySelector('button.select-title').focus();
    }
    async handleMultipleChange(value) {
        const options = await this.option_elements();
        // @ts-ignore
        options.forEach((element) => {
            element.multiple = value;
        });
    }
    async mountedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                option.selectable = true;
                if (this.value && this.value.includes(option.value) && !data.element.selected) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
        }
        else {
            this.value = data.element.selected ? data.element.value : this.value;
            if (this.value) {
                const options = await this.option_elements();
                // @ts-ignore
                options.forEach((element) => {
                    element.selectable = true;
                    if (this.value === element.value) {
                        element.selected = true;
                    }
                });
            }
        }
    }
    async selectionChangedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            data.selected = !data.selected;
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                if (this.value && this.value.includes(option.value) && data.value !== option.value) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
            this.update.emit(this.value);
        }
        else {
            if (!data.element.selectTitle) {
                const options = await this.option_elements();
                // @ts-ignore
                options.forEach((element) => {
                    element.selected = false;
                });
                data.selected = true;
                this.value = data.value;
                this.update.emit(this.value);
                this.titleItem.apply(await data.data());
                setTimeout(() => {
                    this.open = false;
                }, 200);
            }
        }
    }
    selectedFocusChangedHandler() {
        this.focused = true;
    }
    selectedBlurChangedHandler() {
        this.focused = false;
    }
    handleTitleFocus() {
        this.focused = true;
    }
    handleTitleBlur() {
        this.focused = false;
    }
    handleNotClick(e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    }
    handleEscapeKey(event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    }
    handleArrowKeys(ev) {
        if (ev.keyCode === 40 || ev.keyCode === 38) {
            if (this.open) {
                ev.preventDefault();
                ev.stopPropagation();
                if (ev.keyCode === 40) {
                    this.focusNextOption();
                }
                else {
                    this.focusPreviousOption();
                }
            }
        }
    }
    updateLanguage() {
        let language;
        let details;
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                details = pluralize(this.verbiage, this.value.length);
                if (this.placeholderInverted) {
                    language = `All ${details} selected`;
                }
                else {
                    language = `No ${details} selected`;
                }
            }
            else {
                details = pluralize(this.verbiage, this.value.length, true);
                language = `${details} selected`;
            }
        }
        else if (typeof this.value === "string") {
            language = this.valueLabel || this.value.toString() || `Select ${this.verbiageAn ? "an" : "a"} ${this.verbiage}`;
        }
        else {
            language = this.valueLabel || this.value;
        }
        this.language = language;
    }
    async validate() {
        const status = {
            name: `${this.name}`,
            value: this.value,
            valid: true,
            errors: [],
        };
        this.updateLanguage();
        if (!this.novalidate) {
            // @ts-ignore
            if (!this.value) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
            const options = await this.options();
            // @ts-ignore
            if (!options.includes(this.value)) {
                status.valid = false;
                status.errors.push({ message: `"${this.value}" isn't a valid option.` });
            }
        }
        this.status = status;
        return this.status;
    }
    listen_to_values() {
        var targetNode = this.element;
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            type: true
        };
        var callback = () => {
            this.update_values();
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    }
    async option_elements() {
        return this.element.querySelectorAll('stellar-item:not([select-title])');
    }
    async options() {
        const elements = await this.option_elements();
        const options = [];
        // @ts-ignore
        elements.forEach((option) => {
            options.push(option.value);
        });
        return options;
    }
    async focusPaths() {
        let current = undefined;
        let next = undefined;
        let previous = undefined;
        const elements = await this.options();
        // @ts-ignore
        elements.forEach((element, index) => {
            // @ts-ignore
            if (element.hasFocus()) {
                previous = elements[index - 1];
                current = element;
                next = elements[index + 1];
            }
        });
        if (!current) {
            var first = elements[0];
            this.focusElement(first);
            current = first;
        }
        return { previous, current, next };
    }
    focusFirstItem() {
        //@ts-ignore
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    }
    focusElement(element) {
        element.focus();
    }
    async focusNextOption() {
        const elements = await this.focusPaths();
        if (elements.next) {
            this.focusElement(elements.next);
        }
    }
    async focusPreviousOption() {
        const elements = await this.focusPaths();
        if (elements.previous) {
            this.focusElement(elements.previous);
        }
    }
    closeOthers() {
        const selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach((s) => {
            if (s !== this.element) {
                s.open = false;
            }
        });
    }
    handleTitleClick() {
        this.closeOthers();
        this.open = !this.open;
    }
    renderLabel() {
        if (this.label) {
            return h("div", { class: "label-wrapper" }, h("stellar-label", { size: this.size, onClick: () => { this.focusFirstItem(); } }, this.label), this.renderEmptyButton());
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(error => h("span", null, error.message))));
        }
    }
    renderEmptyButton() {
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { class: "clear-button", tag: "button", size: this.size, ghost: true, onClick: (e) => { e.stopPropagation(); this.clearValue(); } }, h("ion-icon", { name: "close" }), this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear`);
    }
    render() {
        return (h("div", { class: "wrapper" }, this.renderLabel(), h("div", { class: "select" }, this.loading && h("div", { class: "loading" }, h("ion-icon", { name: "loading-spin" }), " ", h("p", null, "One sec...")), h("button", { type: "button", class: "select-title", onClick: () => this.handleTitleClick(), onFocus: () => this.handleTitleFocus(), onBlur: () => this.handleTitleBlur() }, h("stellar-item", { fit: true, wrap: true, "select-title": true, type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.language, innerHTML: this.language }), h("ion-icon", { name: "arrow-down" }), this.name && h("input", { type: "text", tabindex: "-1", name: this.name.toString(), required: this.required, value: this.value })), this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: () => this.handleTitleClick() }, this.tooltip), h("stellar-blur", { vertical: this.blur, class: "select-list" }, h("div", { class: "select-list-header" }, h("slot", { name: "header" })), h("div", { class: "select-list-body" }, h("slot", null)), this.footer && h("div", { class: "select-list-footer" }, h("slot", { name: "footer" })))), h("stellar-label", { size: "small", underneath: true }, this.description), !this.novalidate && this.renderErrors()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "multiple": ["handleMultipleChange"]
    }; }
    static get style() { return SelectCss; }
};
Tunnel.injectProps(Select, ['dark']);

export { Select as stellar_select };
