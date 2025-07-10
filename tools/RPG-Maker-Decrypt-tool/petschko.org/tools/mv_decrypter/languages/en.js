var lang_en = { // Ignore this line

	// ===== Base-Data - Please fill these out =====
	'languageName': 'English', // Name of your language in english
	'localizedLanguageName': null, // keep this as null unless the localized name of your language is different
	'flagAltText': 'UK Flag', // will be displayed if the flag-icon of your language cannot be shown
	'htmlLang': 'en', // Keep empty if unsure

	// Add all translation authors here
	'translatedBy': [
		{
			'name': 'Ian G.',
			'url': null
		},
		{
			'name': 'Cora',
			'url': null
		}
	],
	// ========== Config done =========

	// Images Alt-Names (Shown when images cannot be loaded)
	'images.alt.ukFlag': 'UK Flag',
	'images.alt.deFlag': 'German Flag',
	'images.alt.chFlag': 'Chinese Flag',
	'images.alt.projectIcon': 'Project Icon (Chest with a key)',
	'images.alt.brokenLock': '(Broken Lock)',
	'images.alt.lock': '(Lock)',
	'images.alt.validCss': 'CSS is valid!',

	// Meta-Information
	'title': 'RPG-Maker-MV & MZ Decrypter by Petschko',

	// Header Information
	'header.language': 'Language',
	'header.title': 'Petschkos RPG-Maker MV & MZ-File Decrypter',

	// Nav-Tab Items
	'tab.home': 'Home',
	'tab.enDecrypt': 'En- & Decrypt',
	'tab.restoreImages': 'Restore Images (No Key)',
	'tab.browserSupport': 'Browser Support',
	'tab.howToUse': 'How to use',
	'tab.credits': 'Credits',
	'tab.about': 'About',

	// Headings
	'h.fileList': 'File-List',
	'enDecrypt.h.selectFilesAndInfo': 'Select Files & Info',
	'enDecrypt.h.headerInfo': 'Header Info',
	'restore.h.selectFiles': 'Select RPGMVP / PNG_ Files',
	'browserSupport.h': 'Browser Support',
	'howToUse.h': 'How to use?',
	'credits.h': 'Credits',
	'credits.h.code': 'Code Credits',
	'credits.h.image': 'Image Credits',

	// Form Box-Headings
	'enDecrypt.formBox.decryptCode': 'Decrypt Code',
	'enDecrypt.formBox.advanced': 'Advanced',
	'formBox.selectFiles': 'Select File(s)',
	'formBox.fileList': 'Download File(s)',

	// Buttons & UI Elements
	'tooltip.i': 'i', // Tooltip-Element (i) - Info element
	'tooltip.question': '?', // Tooltip-Element (?) - Help element
	'tooltip.details': 'Details', // Tooltip-Element (details) - Details element
	'files.dragAndDrop': '(or) Drag and Drop files here.',
	'button.view': 'View',
	'button.save': 'Save',
	'button.saveAllAsZip': 'Save all as ZIP File',
	'button.clearFiles': 'Clear File List',
	'button.gotoRestorePage': 'Please go here for restoring images without a key',
	'home.button.restoreImages': '(No Key) Restore images from a game',
	'home.button.enDecryptImages': 'En-/Decrypt Files to/from a game',
	'enDecrypt.label.decryptCodeFile': 'Select a {0} or "{1}"/"{2}" File and click {3}!', // 0 => "System(.json)", 1 => ".rpgmvp", 2 => ".png_", 3 => Detect-Button-Text
	'enDecrypt.label.decryptCode': 'En-/Decrypt Code',
	'enDecrypt.label.files': 'En-/Decrypt File(s)',
	'enDecrypt.label.verifyHeader': 'Verify Fake Header?',
	'enDecrypt.label.verifyHeader.yes': 'Yes',
	'enDecrypt.label.verifyHeader.no': 'No (Ignore it)',
	'enDecrypt.label.no': 'No',
	'enDecrypt.label.header.length': 'Header Length {0}', // 0 => In Bytes Text (Italic)
	'enDecrypt.label.header.length.byteNote': '(In Bytes)',
	'enDecrypt.label.header.signature': 'Header Signature',
	'enDecrypt.label.header.version': 'Header Version',
	'enDecrypt.label.header.remain': 'Header Remain',
	'enDecrypt.button.detect': 'Detect',
	'enDecrypt.button.headerValues.show': 'Header Values ({0})', // 0 => Show or Hide (Next 2 Lines)
	'enDecrypt.button.headerValues.show.show': 'Show',
	'enDecrypt.button.headerValues.show.hide': 'Hide',
	'enDecrypt.button.resetHeaderVal': 'Reset Header Values to default',
	'enDecrypt.button.decrypt': 'Decrypt',
	'enDecrypt.button.mv.encrypt': '(Re)-Encrypt MV',
	'enDecrypt.button.mz.encrypt': '(Re)-Encrypt MZ',
	'restore.label.files': 'Select file(s) to restore',
	'restore.button.restoreOriginalImages': 'Restore Original Image(s)',

	// Error/Warning/Info Messages
	'exception.errorCode': 'Error Code',
	'exception.emptyFile': 'File is empty, or can\'t be read by your browser...',
	'exception.invalidFakeHeader.1': 'Fake Header doesn\'t match the Templates Fake Header.',
	'exception.invalidFakeHeader.2': 'Make sure that you use an encrypted file. If you do, turn off "Fake Header" and try again.',
	'exception.reportBug': 'Please report this bug',
	'exception.helper.invalidByte': 'Invalid Byte Value ({0})', // 0 => Byte-Value
	'error': 'Error',
	'error.detect.noFile': 'Please choose the {0}-File or any encrypted Image ({1}-Files)!', // 0 => "System(.json)", 1 => ".rpgmvp / .png_"
	'error.detect.invalidJsonFile': 'Error: File Content was invalid (Was not a JSON file or an encrypted image - {0})', // 0 => ".json/.rpgmvp/.png_"
	'error.detect.keyNotFound.1': 'Error: Encryption key not found - Make sure that you selected the correct file!',
	'error.detect.keyNotFound.2': 'You can also use encrypted images ({0}) to detect the key!', // 0 => ".rpgmvp / .png_"
	'error.detect.keyNotFound.3': 'In rare cases the key is hidden/obfuscated in the game. Try these steps:',
	'error.detect.keyNotFound.3.1': 'Open the Link below and copy the code',
	'error.detect.keyNotFound.3.2': 'Paste the Code at the last line in this file: {0}', // 0 => "./www/js/rpg_core(.js)"
	'error.detect.keyNotFound.3.3': 'Save the file',
	'error.detect.keyNotFound.3.4': 'Run the game and copy the code',
	'error.restore.noFileSelected': 'Specify at least 1 file to restore...',
	'error.enDecrypt.noCode': 'Specify the En-/Decryption code!',
	'error.enDecrypt.invalidCode': 'En-/Decryption code can just contain HEX chars ({0})!', // 0 => "0-9 & A-F & a-f"
	'error.enDecrypt.noFileSelected': 'Specify at least 1 file to de-/encrypt...',
	'error.zip.emptyZip': 'Can\'t offer ZIP download. ZIP would be empty...',
	'info.detect.keyFound': 'Key found ^^! ({0})', // 0 => Encryption key
	'warn.enDecrypt.header.invalidLength': 'Info: Header length must be a positive round number! (Using default now: {0})', // 0 => Default Header Length value
	'warn.enDecrypt.header.invalidSignature': 'Info: Header signature can just contain HEX chars ({0})! (Using default now: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Signature
	'warn.enDecrypt.header.invalidVersion': 'Info: Header version can just contain HEX chars ({0})! (Using default now: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Version
	'warn.enDecrypt.header.invalidRemain': 'Info: Header remain can just contain HEX chars ({0})! (Using default now: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Remain
	'confirm.resetHeaderValues': 'Do you really want to reset the Header-Values to default?',

	// == Content: Hidden-Info ==
	'info.information.1': 'Information',
	'info.information.2': 'I\'ve {0} of my project "{1}", which works with whole directories and save/renames files by itself...', // 0 => "released an Alpha-Version"-Releases-Link, 1 => "Java-RPG-Maker-MV-Decrypter"-Project-Link
	'info.information.2.releaseLink': 'released an Alpha-Version',
	'info.information.2.projectLink': 'Java-RPG-Maker-MV-Decrypter',
	'info.information.3': 'It has a GUI, try it out! If you just want to decrypt single files, I recommend this version here. {0}. For whole directories, you should try the Java version of the decrypter! =)', // 0 => No download argument
	'info.information.3.noDownload': 'Since you don\'t need to download it',

	// == Content: Home ==
	'home.content.welcome.1': 'Welcome to the RPG-Maker MV & MZ-File Decrypter. You can easily decrypt files from any RPG-MV/RPG-MZ Project, which are encrypted with the built-in encryption. You can also encrypt them back (Mainly used for translation purposes).',
	'home.content.welcome.2': 'Make sure that you don\'t use this tool to steal assets. If you want to take a look at the images (which is okay for private use by most laws), feel free to do so, but don\'t steal them please.',
	'home.content.whatToDoSelection': 'Please select what you want to do',

	// == Content: En- & Decrypt ==
	'enDecrypt.content.1': 'PNG-Files (Images - "{0}-Files") don\'t need the decryption code, {1} you want to re-encrypt them.', // 0 => ".rpgmvp & .png_", 1 => "except" (bold txt)
	'enDecrypt.content.2': 'In this area you can De- and (Re-)Encrypt Files from RPG-Maker MV & MZ Games.',
	'enDecrypt.content.3': 'You can get the decrypt code from the file',
	'enDecrypt.content.3.mv': 'RPG-Maker MV',
	'enDecrypt.content.3.mz': 'RPG-Maker MZ',
	'enDecrypt.content.3.text': '"Game directory"{0} or any encrypted image ("{1}"-File)', // 0 => path to system.json, 1 => File-extension
	'enDecrypt.content.4': 'Click "{0}" after you selected the {1} file. If you know the key, you can also just enter it in the text box.', // 0 => Detect-Button-Text, 1 => "System(.json)"
	'enDecrypt.content.header.info': 'When do I need to change these settings?',
	'enDecrypt.content.header.decryption': 'Decryption',
	'enDecrypt.content.header.encryption': 'Encryption',

	// == Content: Restore ==
	'restoreImages.content': 'In this area, you can restore {0} files (images - "{1} files") from RPG Maker games without the decryption key.', // 0 => "PNG", 1 => ".rpgmvp & .png_"

	// == Content: Browser Support ==
	'browserSupport.note': 'Please note, that this script is only tested and developed on {0}. You can help me to make it run on all browsers by {1}!', // 0 => "Firefox", 1 => Report bugs-Link
	'browserSupport.note.reportBugsLink': 'reporting bugs',
	'browserSupport.note.first': 'First',
	'browserSupport.unknown': 'Unknown',
	'browserSupport.unusable': 'Unusable',
	'browserSupport.partialUsable': 'Partially usable',
	'browserSupport.almostCompleteUsable': 'Almost completely usable',
	'browserSupport.usable': 'Usable',
	'browserSupport.outOfSupport': 'Not supported',
	'browserSupport.feature.downloadFiles': 'Download Files',
	'browserSupport.feature.viewFiles': 'View Files',
	'browserSupport.feature.enDecrypt': 'En-/Decrypt',
	'browserSupport.feature.zipDownload': 'ZIP Download',
	'browserSupport.browser.ie': 'Internet Explorer',
	'browserSupport.browser.edge': 'Edge',
	'browserSupport.browser.chrome': 'Google Chrome',
	'browserSupport.browser.firefox': 'Firefox',
	'browserSupport.browser.safari': 'Safari',
	'browserSupport.browser.opera': 'Opera',

	// == Content: How to use ==
	'howToUse.content.or': 'or',
	'howToUse.content.new': 'New',
	'howToUse.content.except': 'except',
	'howToUse.content.1.1': 'Check if the encrypted files have the file extension {0} - If they have these extension(s), then you can use this script.', // 0 => All-Valid Files extensions
	'howToUse.content.1.2': 'If you want to ENCRYPT files, they usually have a file extension like "{0}" or something similar to that =)', // 0 => ".png"
	'howToUse.content.2.1': 'Get the en-/decrypt code.',
	'howToUse.content.2.2': '{0} files (images - "{1} files") don\'t need the decryption code, {2} you want to re-encrypt them.', // 0 => "PNG", 1 => ".rpgmvp & .png_", 2 => "except"
	'howToUse.content.2.ul.1': 'Upload the {0} file from the game and detect the code automatically. (Click on "{1}", after selecting the {0})', // 0 => "System(.json)", 1 => Detect-Button-Text
	'howToUse.content.2.ul.2': 'If the detection doesn\'t work, further instructions will pop up.',
	'howToUse.content.3.1': 'Select the file(s) for de-/encryption',
	'howToUse.content.3.2': 'You can select multiple files!',
	'howToUse.content.4': 'Hit the decrypt or encrypt button.',
	'howToUse.content.5.1': 'You can preview your decrypted files if you click on "{0}" next to the filename.', // 0 => View Button Name
	'howToUse.content.5.2': 'Of course you can\'t preview encrypted files',
	'howToUse.content.6': 'You can save them by clicking on "{0}". (The script will keep the file name and change the extension for you!) =)', // 0 => Save Button Name
	'howToUse.content.6.ul.1': 'You can also save all the files in the file list as a ZIP by clicking "{0}"!', // 0 => Save all as Zip Button-Name

	// == Content: Credits ==
	'credits.anonymous': 'Anonymous',
	'credits.anonymous.explanation': 'This user wants to remain anonymous, but this belongs to them',
	'credits.forProject': 'For creating this project',
	'credits.forLib': 'For the {0} library', // 0 => Lib-Name
	'credits.betterInterface': 'For a more user-friendly interface',
	'credits.noKey': 'For the tip with the No-Key "decryption" for {0}', // 0 => "PNGs"
	'credits.chrome.viewFile': 'For help solving the Chrome "View-File" bug',
	'credits.icon': 'Icon',
	'credits.icons': 'Icons',
	'credits.lock': 'Lock',
	'credits.unknownAuthor': 'Please {0}, I can\'t find the source anymore to add you!', // 0 => E-Mail-Link
	'credits.emailLink': 'send me an E-Mail',

	// == Content: Tooltips ==
	'tooltip.content.infoZipDownload': 'There is a size limitation depending on your memory and your browser... To handle MANY files ({0}), you should use the Java Decrypter!', // 0 => "500+mb"
	'tooltip.content.infoClearFiles': 'Removes all files from the list below',
	'tooltip.content.viewEncryptedFileInfo': 'This file is encrypted and you can\'t view it in the Browser. You can save it and put it in the game (translated images, for example).',
	'tooltip.content.gameDir': 'Game Directory',
	'tooltip.content.summary': 'Summary',
	'enDecrypt.tooltip.content.headerInfo': 'Expert Settings! Usually you don\'t need to change anything here! (Just in VERY RARE cases)',
	'enDecrypt.tooltip.content.verifyHeader.help.1': 'This checks if the file header is correct (start of the file).',
	'enDecrypt.tooltip.content.verifyHeader.help.2': 'The header is only important for encryption (decryption can ignore it).',
	'enDecrypt.tooltip.content.verifyHeader.help.3': 'In {0} cases some games use different header settings. You can find the correct header settings in:', // 0 => "very rare" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.help.3.rare': 'very rare',
	'enDecrypt.tooltip.content.verifyHeader.help.4': 'Search for "{0}"; there, you can find all values.', // 0 => "function Decrypter()"
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1': 'Ignores the file header',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1.warning': 'Warning',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.2': 'Can cause invalid decrypted files! (It will decrypt even if the file was NOT encrypted. It will render the file useless.)',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.3': 'Only use "{0}" if you are sure that your file was encrypted by RPG Maker!', // 0 => No-Button Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.1': 'Usually you don\'t need the header for decryption.',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.2': 'It is just thrown away',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.3': 'It\'s just used to ensure that your file was encrypted by RPG Maker ^^',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary': 'You {0} decrypt any RPG File without knowing the correct settings.', // 0 => "CAN" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.can': 'CAN',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.2': 'Just change it to "Don\'t verify" if it can\'t verify the header for you =)',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.3': 'It will usually work with the default settings.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.1': 'If you want to put a file back into the game, you NEED the Header. The game checks if the header is correct.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.2': 'If the header is not correct, the game can\'t display it...',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3': 'You {0} the correct header. If the header is wrong, the game can\'t display it.', // 0 => "NEED" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3.need': 'NEED',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.4': 'Usually, the default settings will work fine for {0} of {1} games.', // 0 => "99", 1 => "100"
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.5': 'So, please try the default setting first. If it doesn\'t work, then you can search for the correct header settings.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.6': 'You find them here:',

	// Titles (Mouseover hints)
	'title.projectIcon': 'Unlock or Re-Lock RPG Maker MV Files',
	'title.dragAndDrop': 'Drag and drop files here, or select them',
	'title.viewInBrowser': 'View file in your browser',
	'title.save': 'Save file on your computer',
	'languages.title.selectDifferentLang': 'Select a different language',
	'info.title.seeReleases': 'See the alpha on GitLab',
	'info.title.seeProject': 'Visit the project on GitLab',
	'browserSupport.title.reportBugs': 'Help me by reporting bugs',

	// Footer
	'footer.createdBy': 'Script created by {0}', // 0 => "Petschko"-Link
	'footer.creator.title': 'Send me an email if you have questions/problems',
	'footer.visitRepo': 'Visit the repository on GitLab',
	'footer.visitRepo.title': 'Visit this project on GitLab',
	'footer.reportBugs': 'Please report bugs here',
	'footer.reportBugs.title': 'Please report bugs if you find some =) (Can also send me an email.)',
	'footer.translatedBy': 'English proofreading by {0}', // 0 => Translator name(s) and link(s) if given
	'footer.translatedByLinkTitle': 'Visit the translators website',
	'footer.translateHelp': 'Submit a translation or fix spelling errors here',

} // Ignore this line
