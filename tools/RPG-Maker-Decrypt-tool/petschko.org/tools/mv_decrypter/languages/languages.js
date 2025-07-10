var languageList = {
	'languages': [ // Add new languages here
		{
			'languageName': 'English',
			'localizedLanguageName': null,
			'var_name': 'lang_en',
			'flagFile': 'en.png',
			'flagAltText': 'UK Flag',
			'enabled': true,
		},
		{
			'languageName': 'German',
			'localizedLanguageName': 'Deutsch',
			'var_name': 'lang_de',
			'flagFile': 'de.png',
			'flagAltText': 'Deutsche Flagge',
			'enabled': true,
		},
		
		{
			'languageName': 'Simplified Chinese',
			'localizedLanguageName': '简体中文',
			'var_name': 'lang_zh_hans',
			'flagFile': 'zh.png',
			'flagAltText': 'China Flag',
			'enabled': true,
		},
		{
			'languageName': 'French',
			'localizedLanguageName': 'Français',
			'var_name': 'lang_fr',
			'flagFile': 'fr.png',
			'flagAltText': 'Drapeau Français',
			'enabled': true,
		},
		{
			'languageName': 'Test Language', // Language name in English
			'localizedLanguageName': null, // Put in the language name in your language or null to not use this
			'var_name': 'lang_test',
			'flagFile': null, // ignore
			'flagAltText': 'Flag', // ignore
			'enabled': false, // true = enables the test language - save and reload the page to select it in the language menu
		}
	],

	// Index of the default Language (0 = First enabled entry, 1 = Second enabled Entry and so on...)
	'defaultLangIndex': 0
}
