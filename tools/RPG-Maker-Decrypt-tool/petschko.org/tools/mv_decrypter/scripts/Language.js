/**
 * Author: Peter Dragicevic [peter@petschko.org]
 * Authors-Website: https://petschko.org/
 * Date: 15.06.2024
 * Time: 17:56
 */

var lang;

/**
 * Creates a new Language Object
 *
 * @param {object} languageListFile - Content about the available Languages
 * @constructor - Language
 */
function Language(languageListFile) {
	this.list = languageListFile.languages;
	this.activeIndex = languageListFile.defaultLangIndex;
	this.defaultLangIndex = languageListFile.defaultLangIndex;
	this.strings = [];
	this.init = false;
	this.langListOpen = false;

	// Misc
	this.listenerAddMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';

	// Const
	this.prefKey = 'rpgmmvd-language';
	this.translateClass = 'trl';
	this.translateChildClass = 'trl-child';
	this.translateableText = 'data-trl';
	this.translateableHasChilds = 'data-trl-has-children';
	this.translateableChildIndex = 'data-trl-child';
	this.translateableAlt = 'data-trl-alt';
	this.translateableTitle = 'data-trl-title';
	this.translationStylesId = 'translation-styles';
	this.languageSwitcherBarId = 'language-switcher';
	this.translatorCreditsDivId = 'translator-credits';
	this.languageSelectionListContainerId = 'language-selection-list-container';
	this.languageSelectionListId = 'language-selection-list';
	this.activeLanguageLinkId = 'active-language';

	/**
	 * Removes disabled languages from the List
	 */
	Language.prototype.removeDisabledLanguages = function() {
		var list = [];
		for(var i = 0; i < this.list.length; i++) {
			if(this.list[i]['enabled'])
				list.push(this.list[i]);
		}

		this.list = list;
	}

	/**
	 * Builds the Language-Switcher on the Frontend
	 */
	Language.prototype.updateLanguageSwitcher = function() {
		var that = this;
		var langMenuOpenerLink = document.getElementById(this.activeLanguageLinkId);
		if(langMenuOpenerLink === null)
			return;

		// Generate the List
		this.generateSwitchLanguageList();

		// Translate the active Element
		langMenuOpenerLink.innerHTML = this.generateLanguageFlagIcon(this.activeIndex) + ' ' + this.generateLanguageName(this.activeIndex)
			+ ' <span id="select-language-icon" class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

		// Assign action-listener on init for showing/hide the Language-List
		if(! this.init) {
			langMenuOpenerLink[this.listenerAddMethod](window.addEventListener ? 'click' : 'onclick', function(event) {
				that.toggleLanguageList();
				event.preventDefault();
			}, false);
			//langMenuOpenerLink[this.listenerAddMethod](window.addEventListener ? 'focusout' : 'onfocusout', function(event) {
			//	that.toggleLanguageList(false);
			//}, false);

			// Preparations done show the bar now except only 1 language exists
			if(this.list.length > 1)
				this.showLanguageSwitcher(true);
		}
	}

	/**
	 * Generates the Language-Name for the selected index
	 *
	 * @param {int} index - Index to create the name for
	 * @returns {string} - Full Language-Name
	 */
	Language.prototype.generateLanguageName = function(index) {
		var langName = html(this.list[index]['languageName']);
		if(this.list[index]['languageName'] !== this.list[index]['localizedLanguageName'] && this.list[index]['localizedLanguageName'] !== null)
			langName += ' (' + html(this.list[index]['localizedLanguageName']) + ')'

		return langName;
	}

	/**
	 * Generates the Flag-Icon for the selected index
	 *
	 * @param {int} index - Index to create the Flag-Icon for
	 * @returns {string} - Flag-Icon Html
	 */
	Language.prototype.generateLanguageFlagIcon = function(index) {
		if(this.list[index].flagFile === null)
			return '';

		return '<img src="img/flags/' + html(encodeURI(this.list[index].flagFile).replace('/', '')) + '" alt="' + html(this.list[index].flagAltText) + '" class="flag-icon">';
	}

	/**
	 * Generates the switch language list
	 */
	Language.prototype.generateSwitchLanguageList = function() {
		var listEl = document.getElementById(this.languageSelectionListId);
		if(listEl === null)
			return;

		// Clear the List
		listEl.innerHTML = '';

		// Generate Entries
		var that = this;
		for(var i = 0; i < this.list.length; i++) {
			// Don't add the current language
			if(this.activeIndex === i)
				continue;

			// Create the Entry
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.href = 'javascript:void(0);';
			a.innerHTML = this.generateLanguageFlagIcon(i) + ' ' + this.generateLanguageName(i);

			// Add everything together
			li.appendChild(a);
			listEl.appendChild(li);

			// Add Listener
			a[this.listenerAddMethod](window.addEventListener ? 'click' : 'onclick', function(index) {
				return function(event) {
					that.switchLanguage(index);
					event.preventDefault();
				};
			}(i), false);
		}
	}

	/**
	 * Tries to read the last Language-Value from the User
	 */
	Language.prototype.readPref = function() {
		var prefVarName = localStorage.getItem(this.prefKey);
		if(prefVarName === null)
			return;

		var prefIndex = this.findIndexByVarName(prefVarName);
		if(prefIndex === null)
			return;

		if(this.indexIsValid(prefIndex))
			this.activeIndex = prefIndex;
	}

	/**
	 * Saves the current-Selected Language to the Users Local-Storage
	 */
	Language.prototype.savePref = function() {
		// Delete when it's the default lang
		if(this.activeIndex === this.defaultLangIndex) {
			this.deletePref();
			return;
		}

		localStorage.setItem(this.prefKey, this.list[this.activeIndex].var_name)
	}

	/**
	 * Deletes the User-Pref from the Users Local-Storage
	 */
	Language.prototype.deletePref = function() {
		localStorage.removeItem(this.prefKey)
	}

	/**
	 * Finds the Language-Index via the "var_name"
	 *
	 * @param {string} varName - Var-Name
	 * @returns {int|null} - Index or null if not found
	 */
	Language.prototype.findIndexByVarName = function(varName) {
		for(var i = 0; i < this.list.length; i++) {
			if(this.list[i].var_name === varName)
				return i;
		}

		return null;
	}

	/**
	 * Checks if the Index is in bound of the List
	 *
	 * @param {int} index - Index to check
	 * @returns {boolean} - Index is valid
	 */
	Language.prototype.indexIsValid = function(index) {
		return index > 0 || index < this.list.length;
	}

	/**
	 * Checks if the var name has no invalid characters, to prevent Eval from executing code
	 *
	 * @param {string} varName - Var-Name content to check
	 * @returns {boolean} - Has invalid characters
	 */
	Language.prototype.varNameHasInvalidChars = function(varName) {
		return /[^A-Za-z0-9_]/.test(varName);
	}

	/**
	 * Updates all Text within the HTML-Elements
	 */
	Language.prototype.updateStringElements = function() {
		var elements = document.getElementsByClassName(this.translateClass);

		// Update HTML-Language Meta
		document.documentElement.lang = html(this.strings['htmlLang']);

		// Update Title
		document.title = escapeTitle(this.strings['title']);

		// Update ::before Styles
		var styleEl = document.getElementById(this.translationStylesId);
		if(styleEl !== null) {
			styleEl.innerHTML = '';
			if(this.strings['files.dragAndDrop'] !== undefined)
				styleEl.innerHTML += '.drag-drop-file:before { content: \'' + html(this.strings['files.dragAndDrop']) + '\'; }';
		}

		// Update translatable main elements first
		for(var i = 0; i < elements.length; i++) {
			this.translateElement(elements[i]);
		}
	}

	/**
	 * Translates an Element
	 *
	 * @param {HTMLElement} element - Element to translate
	 */
	Language.prototype.translateElement = function(element) {
		var data;
		var savedChildren = null;

		// Get children first
		if(element.hasAttribute(this.translateableHasChilds)) {
			var hasChild = element.getAttribute(this.translateableHasChilds);

			if(hasChild === "true" || hasChild === "1") {
				savedChildren = element.getElementsByClassName(this.translateChildClass);

				if(savedChildren.length === 0)
					savedChildren = null;
			}
		}

		if(element.hasAttribute(this.translateableText)) {
			data = element.getAttribute(this.translateableText);

			if(savedChildren === null)
				element.innerHTML = html(this.strings[data]);
			else
				element.innerHTML = this.translateTextWithChild(this.strings[data], savedChildren);
		}
		if(element.hasAttribute(this.translateableAlt)) {
			data = element.getAttribute(this.translateableAlt);
			element.alt = escapeTitle(this.strings[data]);
		}
		if(element.hasAttribute(this.translateableTitle)) {
			data = element.getAttribute(this.translateableTitle);
			element.title = escapeTitle(this.strings[data]);
		}
	}

	/**
	 * Translates Text with children, given as List
	 *
	 * @param {string} translationText - Translation Text with children placeholder
	 * @param {HTMLCollection} children - Children-HTML Elements
	 * @returns {string} - Translated HTML (Escaped)
	 */
	Language.prototype.translateTextWithChild = function(translationText, children) {
		// Escape HTML
		translationText = html(translationText);

		// Sort child HTML-Elements first
		var sortedChildren = Array(children.length);
		var i;
		for(i = 0; i < children.length; i++) {
			if(! children[i].hasAttribute(this.translateableChildIndex))
				continue;

			var childIndex = children[i].getAttribute(this.translateableChildIndex);
			if(isNaN(childIndex))
				continue;

			if(childIndex > sortedChildren.length - 1)
				continue;

			// Translate Element first
			this.translateElement(children[i]);

			// Save element as Text
			sortedChildren[childIndex] = children[i].outerHTML;
		}

		children = null;

		// Replace the placeholders with the sorted children
		for(i = 0; i < sortedChildren.length; i++) {
			if(sortedChildren[i] === undefined || sortedChildren[i] === null)
				continue;

			translationText = translationText.replaceAll('{' + i + '}', sortedChildren[i]);
		}

		return translationText;
	}

	/**
	 * Updates the Translator Info
	 */
	Language.prototype.updateTranslatorInfo = function() {
		var translators = this.strings.translatedBy;
		var translatorElement = document.getElementById(this.translatorCreditsDivId);

		if(translators.length < 1 || translatorElement === null) {
			this.showTranslatorInfo(false);
			return;
		}

		var translatorCreditUsers = '';
		for(var i = 0; i < translators.length; i++) {
			var hasUrl = translators[i].url !== null && translators[i].url !== '' && translators[i].url !== undefined;

			if(i > 0) {
				if(i === translators.length - 1)
					translatorCreditUsers += ' &amp; ';
				else
					translatorCreditUsers += ', ';
			}

			if(hasUrl)
				translatorCreditUsers += '<a href="' + translators[i].url + '" target="_blank" title="' + html(this.strings['footer.translatedByLinkTitle']) + '">' + html(translators[i].name) + '</a>';
			else
				translatorCreditUsers += '<b>' + html(translators[i].name) + '</b>';
		}

		translatorElement.innerHTML = html(this.strings['footer.translatedBy']).replace('{0}', translatorCreditUsers);

		this.showTranslatorInfo(true);
	}

	/**
	 * Shows the Translator Info
	 *
	 * @param {boolean} show - Shows the Translator Info
	 */
	Language.prototype.showTranslatorInfo = function(show) {
		var element = document.getElementById(this.translatorCreditsDivId);
		if(element === null)
			return;

		element.style.display = show ? 'block' : '';
	}

	/**
	 * Shows the language switcher
	 *
	 * @param {boolean} show - Shows the language switcher
	 */
	Language.prototype.showLanguageSwitcher = function(show) {
		var element = document.getElementById(this.languageSwitcherBarId);
		if(element === null)
			return;

		element.style.display = show ? 'block' : '';
	}

	this.removeDisabledLanguages();
	if(this.list.length > 0) {
		this.readPref();
		this.switchLanguage(this.activeIndex);
		this.updateLanguageSwitcher();
	}
	this.init = true;
}

/**
 * Switches the Language
 *
 * @param {int} newIndex - New Language-Index
 */
Language.prototype.switchLanguage = function(newIndex) {
	// Always close the list first and remove focus
	this.toggleLanguageList(false);
	document.activeElement.blur();

	if(! this.indexIsValid(newIndex))
		return;

	// Don't trigger this if it's the same active index after init
	if(this.init && newIndex === this.activeIndex)
		return;

	// Exit in case any special chars are in var name to prevent abuse of eval
	if(this.varNameHasInvalidChars(this.list[newIndex].var_name)) {
		alert('The selected language cannot be loaded because the var-name contains illegal characters!');
		return;
	}

	// Yes I know... Sadly it's the only way, so it works locally too
	var strings = eval(this.list[newIndex].var_name);

	if(strings === undefined || strings === null) {
		alert('The selected language is Invalid, it doesn\'t has any translated strings! (Is the Language-File not loaded maybe or has a wrong var name?)');
		return;
	}

	this.strings = strings;
	this.activeIndex = newIndex;

	this.updateStringElements();
	this.updateTranslatorInfo();
	if(this.init)
		this.updateLanguageSwitcher();
	this.savePref();
}

/**
 * Shows/Hides the Language-List based on the internal value to switch it to the opposite
 *
 * @param {boolean=} show - Shows the language switcher or hides it forcefully, omit to use the internal value
 */
Language.prototype.toggleLanguageList = function(show) {
	var element = document.getElementById(this.languageSelectionListContainerId);
	if(element === null)
		return;

	if(show === undefined) {
		element.style.display = this.langListOpen ? '' : 'block';
		this.langListOpen = !this.langListOpen;
	} else {
		element.style.display = show ? 'block' : '';
		this.langListOpen = show;
	}
}
