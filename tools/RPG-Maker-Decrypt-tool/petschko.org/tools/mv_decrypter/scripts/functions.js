/**
 * Author: Peter Dragicevic [peter@petschko.org]
 * Authors-Website: http://petschko.org/
 * Date: 30.03.2017
 * Time: 23:05
 */

// Globals
var zip;

/**
 * Try to Reads the Encryption-Code and insert it to the given input element
 *
 * @param {string} systemFileElId - File-Picker-Id for the System.json-File
 * @param {string} codeTextElId - Text-Input-Id for the Encryption-Key
 * @param {string} headerLenId - Text-Input for the Header-Length
 */
function getCode(systemFileElId, codeTextElId, headerLenId) {
	var systemFileEl = document.getElementById(systemFileElId);
	var codeTextEl = document.getElementById(codeTextElId);
	var headerLen = document.getElementById(headerLenId);

	if(systemFileEl.files.length < 1) {
		alert(lang.strings['error.detect.noFile']
			.replace('{0}', 'System(.json)')
			.replace('{1}', '.rpgmvp / .png_'));
		return;
	}

	Decrypter.detectEncryptionCode(new RPGFile(systemFileEl.files[0], null), parseInt(headerLen.value), function(key) {
		if(key === null) {
			alert(lang.strings['error.detect.invalidJsonFile'].replace('{0}', '.json/.rpgmvp/.png_'));
			return;
		}

		if(typeof key === 'string' && key.length > 0) {
			codeTextEl.value = key;
			codeTextEl.className = removeValidationCssClasses(codeTextEl.className);
			codeTextEl.className = addCssClass(codeTextEl.className, 'valid');
			alert(lang.strings['info.detect.keyFound'].replace('{0}', key));
		} else
			window.prompt(
				lang.strings['error.detect.keyNotFound.1'] + '\n\n' +
				lang.strings['error.detect.keyNotFound.2'].replace('{0}', '.rpgmvp / .png_') + '\n' +
				'-------------------------------------\n' +
				lang.strings['error.detect.keyNotFound.3'] + '\n' +
				'1. ' + lang.strings['error.detect.keyNotFound.3.1'] + '\n' +
				'2. ' + lang.strings['error.detect.keyNotFound.3.2'].replace('{0}', './www/js/rpg_core(.js)') + '\n' +
				'3. ' + lang.strings['error.detect.keyNotFound.3.3'] + '\n' +
				'4. ' + lang.strings['error.detect.keyNotFound.3.4'] + '\n\n',
				'https://pastebin.com/nCrzCpzD'
			);
	});
}

/**
 * Removes a CSS-Class
 *
 * @param {string} elementClasses - Element CSS-Classes
 * @param {string} removeClass - Class to remove
 * @returns {string} - New CSS-Classes
 */
function removeCssClass(elementClasses, removeClass) {
	var newClassNames = '';
	var classes = elementClasses.split(' ');

	// Check if element is in array else exit
	if(classes.indexOf(removeClass) === -1)
		return elementClasses;

	for(var i = 0; i < classes.length; i++) {
		if(classes[i] !== removeClass)
			newClassNames += classes[i] + ' ';
	}

	return newClassNames.trim();
}

/**
 * Adds a CSS-Class, it never adds an existing class twice
 *
 * @param {string} elementClasses - Element CSS-Classes
 * @param {string} addClass - Class to add
 * @returns {string} - New CSS-Classes
 */
function addCssClass(elementClasses, addClass) {
	var classes = elementClasses.split(' ');

	if(classes.indexOf(addClass) !== -1)
		return elementClasses;

	return (elementClasses + ' ' + addClass).trim();
}

/**
 * Check if a the searched Class is within this class-string
 *
 * @param {string} elementClasses - Element CSS-Classes
 * @param {string} searchClass - Class to check
 * @returns {boolean} - true if the class exist else false
 */
function hasCssClass(elementClasses, searchClass) {
	var classes = elementClasses.split(' ');

	return (classes.indexOf(searchClass) !== -1);
}

/**
 * Get the Value of a Radio-Button-Group
 *
 * @param {string} radioButtonGroupName - Radio-Button-Group-Name
 * @param {string} fallback - Fallback-Value
 * @returns {string} - Current Value or Fallback-Value if group doesn't exists or nothing is selected
 */
function getRadioButtonValue(radioButtonGroupName, fallback) {
	var radioButtons = document.getElementsByName(radioButtonGroupName);
	var currentValue = fallback;

	for(var i = 0; i < radioButtons.length; i++) {
		if(radioButtons[i].checked) {
			currentValue = radioButtons[i].value;
			break;
		}
	}

	return currentValue;
}

/**
 * Removes all Validation-Classes
 *
 * @param {string} currentClasses - Current Element CSS-Classes
 * @returns {string} - CSS-Classes without validation ones
 */
function removeValidationCssClasses(currentClasses) {
	currentClasses = removeCssClass(currentClasses, 'invalid');
	currentClasses = removeCssClass(currentClasses, 'manualChange');
	currentClasses = removeCssClass(currentClasses, 'valid');

	return currentClasses;
}

/**
 * Changes the validation class to manualChange
 *
 * @param {string} elementId - Element-Id to where to change
 */
function manualChange(elementId) {
	var element = document.getElementById(elementId);

	element.className = removeValidationCssClasses(element.className);
	element.className = addCssClass(element.className, 'manualChange');
}

/**
 * Shows/Hides a Spoiler-Element
 *
 * @param {string} spoilerTextElId - Element-Id of the Spoiler-Text
 * @param {string} spoilerText - Text of the Spoiler-Text-Element (without show/hide)
 * @param {string} spoilerElId - Spoiler-Element-Id
 */
function spoiler(spoilerTextElId, spoilerText, spoilerElId) {
	var spoilerTextEl = document.getElementById(spoilerTextElId);
	var spoilerEl = document.getElementById(spoilerElId);
	var showHideSpan = spoilerTextEl.getElementsByTagName('span')[0];

	if(hasCssClass(spoilerEl.className, 'hidden')) {
		spoilerEl.className = removeCssClass(spoilerEl.className, 'hidden');

		showHideSpan.setAttribute(lang.translateableText, 'enDecrypt.button.headerValues.show.hide');
		showHideSpan.innerHTML = html(lang.strings['enDecrypt.button.headerValues.show.hide']);
	} else {
		spoilerEl.className = addCssClass(spoilerEl.className, 'hidden');

		showHideSpan.setAttribute(lang.translateableText, 'enDecrypt.button.headerValues.show.show');
		showHideSpan.innerHTML = html(lang.strings['enDecrypt.button.headerValues.show.show']);
	}
}

/**
 * Adds all Action-Listener
 */
function init() {
	var addMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';

	// Get Elements
	var detectButton = document.getElementById('detectButton');
	var inputCode = document.getElementById('decryptCode');
	var decryptButton = document.getElementById('decrypt');
	var encryptButtonMv = document.getElementById('encrypt-mv');
	var encryptButtonMz = document.getElementById('encrypt-mz');
	var restoreButton = document.getElementById('restoreEncryptedImages');
	var spoilerHeader = document.getElementById('spoilerHeaderInfoText');
	var headerRadioButtons = document.getElementsByName('checkFakeHeader');
	var headerAreaEl = document.getElementById('headerValuesEditArea');
	var headerResetButton = document.getElementById('resetHeader');
	var zipSaveButtons = document.getElementsByClassName('zipSave');
	var clearFileListButtons = document.getElementsByClassName('clearFileList');

	// Language Init
	lang = new Language(languageList);

	// Prepare stuff
	if(! parseInt(getRadioButtonValue('checkFakeHeader', '1')))
		headerAreaEl.className = addCssClass(headerAreaEl.className, 'hidden');
	setHeaderDefaultValues(false);

	// Add Listener
	headerRadioButtons[0][addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		// Yes Button
		headerAreaEl.className = removeCssClass(headerAreaEl.className, 'hidden');
	}, false);
	headerRadioButtons[1][addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		// No Button
		headerAreaEl.className = addCssClass(headerAreaEl.className, 'hidden');
	}, false);
	headerResetButton[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		setHeaderDefaultValues(true);
	}, false);
	spoilerHeader[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		spoiler('spoilerHeaderInfoText', 'Header-Values', 'headerInfo');
	}, false);
	detectButton[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		getCode('systemFile', 'decryptCode', 'headerLen');
	}, false);
	decryptButton[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		processFiles(
			'encryptedFiles',
			'decryptCode',
			'blob-list',
			true,
			!! parseInt(getRadioButtonValue('checkFakeHeader', '0')),
			'headerLen',
			'signature',
			'version',
			'remain',
			RPGFile.typeMV
		);
	}, false);
	encryptButtonMv[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		processFiles(
			'encryptedFiles',
			'decryptCode',
			'blob-list',
			false,
			true,
			'headerLen',
			'signature',
			'version',
			'remain',
			RPGFile.typeMV
		);
	}, false);
	encryptButtonMz[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		processFiles(
			'encryptedFiles',
			'decryptCode',
			'blob-list',
			false,
			true,
			'headerLen',
			'signature',
			'version',
			'remain',
			RPGFile.typeMZ
		);
	}, false);
	inputCode[addMethod](window.addEventListener ? 'change' : 'onchange', function() {
		manualChange('decryptCode');
	}, false);
	restoreButton[addMethod](window.addEventListener ? 'click' : 'onclick', function() {
		processRestoreFiles('encryptedImg', 'blob-list');
	}, false);

	// File-List Listener
	var i;
	for(i = 0; i < zipSaveButtons.length; i++) {
		zipSaveButtons[i][addMethod](window.addEventListener ? 'click' : 'onclick', function() {
			saveZip();
		}, false);
	}
	for(i = 0; i < clearFileListButtons.length; i++) {
		clearFileListButtons[i][addMethod](window.addEventListener ? 'click' : 'onclick', function() {
			clearFileList('blob-list', 'zipSave', 'clearFileList');
		}, false);
	}
	zip = new ZIP();
}

document.body[window.addEventListener ? 'addEventListener' : 'attachEvent'](
	window.addEventListener ? 'load' : 'onload', init(), false);

/**
 * Set all Values to default within the Header-Values-Area
 *
 * @param {boolean} confirmDialog - Ask before reset
 */
function setHeaderDefaultValues(confirmDialog) {
	if(confirmDialog) {
		if(! confirm(lang.strings['confirm.resetHeaderValues']))
			return;
	}

	// Get all Elements
	var headerLenEl = document.getElementById('headerLen');
	var headerSigEl = document.getElementById('signature');
	var headerVerEl = document.getElementById('version');
	var headerRemainEl = document.getElementById('remain');

	// Get a dummy Decrypter Class
	var decrypter = new Decrypter('000000');

	// Set Values
	headerLenEl.value = decrypter.defaultHeaderLen;
	headerLenEl.placeholder = decrypter.defaultHeaderLen;
	headerSigEl.value = decrypter.defaultSignature;
	headerSigEl.placeholder = decrypter.defaultSignature;
	headerVerEl.value = decrypter.defaultVersion;
	headerVerEl.placeholder = decrypter.defaultVersion;
	headerRemainEl.value = decrypter.defaultRemain;
	headerRemainEl.placeholder = decrypter.defaultRemain;
}

/**
 * Restores images from MV-Encrypted-Files
 *
 * @param {string} fileUrlElId - Element-Id of the File(s)-Picker
 * @param {string} outputElClass - Output-Element-Class
 */
function processRestoreFiles(fileUrlElId, outputElClass) {
	var outputEls = document.getElementsByClassName(outputElClass);
	var fileUrlEl = document.getElementById(fileUrlElId);

	// Check if at least 1 File is given
	if(fileUrlEl.files.length < 1) {
		alert(lang.strings['error.restore.noFileSelected']);

		return;
	}

	var decrypter = new Decrypter(null);
	decrypter.headerLen = 16;

	// Process all Files
	var buttonsEnabled = false; // Just trigger that event one time this loop
	for(var i = 0; i < fileUrlEl.files.length; i++) {
		var rpgFile = new RPGFile(fileUrlEl.files[i], null);

		decrypter.restoreHeader(rpgFile, function(rpgFile, exception) {
			// Output Decrypted file
			for(var n = 0; n < outputEls.length; n++) {
				if(exception !== null)
					outputEls[n].appendChild(rpgFile.createOutPut(exception.toString()));
				else {
					rpgFile.convertExtension(true);
					outputEls[n].appendChild(rpgFile.createOutPut(null));
					zip.addFile(rpgFile);
				}
			}

			if(! buttonsEnabled && exception === null) {
				enableFileButtons('clearFileList', 'zipSave');
				buttonsEnabled = true;
			}
		});
	}
}

/**
 * Decrypt a bunch of MV-Encrypted-Files
 *
 * @param {string} fileUrlElId - Element-Id of the File(s)-Picker
 * @param {string} decryptCodeElId - Element-Id of the Decryption-Code Input Field
 * @param {string} outputElClass - Output-Element-Class
 * @param {boolean} decrypt - Decrypt (true decrypts false encrypts)
 * @param {boolean} verifyHeader - Verify Header
 * @param {string} headerLenElId - Element-Id of the Header-Length
 * @param {string} signatureElId - Element-Id of the Signature
 * @param {string} versionElId - Element-Id of the Version
 * @param {string} remainElId - Element-Id of the Remain
 * @param {int} rpgMakerType - Type of the RPG-Maker
 */
function processFiles(
	fileUrlElId,
	decryptCodeElId,
	outputElClass,
	decrypt,
	verifyHeader,
	headerLenElId,
	signatureElId,
	versionElId,
	remainElId,
	rpgMakerType
) {
	var outputEls = document.getElementsByClassName(outputElClass);
	var fileUrlEl = document.getElementById(fileUrlElId);
	var encryptCodeEl = document.getElementById(decryptCodeElId);
	var encryptionCode = encryptCodeEl.value;
	var headerLen = null;
	var signature = null;
	var version = null;
	var remain = null;

	// On encryption verify-header is req
	if(! decrypt)
		verifyHeader = true;

	if(verifyHeader) {
		var headerLenEl = document.getElementById(headerLenElId);
		var signatureEl = document.getElementById(signatureElId);
		var versionEl = document.getElementById(versionElId);
		var remainEl = document.getElementById(remainElId);

		if(headerLenEl)
			headerLen = headerLenEl.value;
		if(signatureEl)
			signature = signatureEl.value;
		if(versionEl)
			version = versionEl.value;
		if(remainEl)
			remain = remainEl.value;
	}

	// Check if all required stuff is given
	if(! encryptionCode) {
		alert(lang.strings['error.enDecrypt.noCode']);
		encryptCodeEl.className = removeValidationCssClasses(encryptCodeEl.className);
		encryptCodeEl.className = addCssClass(encryptCodeEl.className, 'invalid');

		return;
	}

	// Check if code just contain HEX-Chars
	if(! Decrypter.checkHexChars(encryptionCode)) {
		alert(lang.strings['error.enDecrypt.invalidCode'].replace('{0}', '0-9 & A-F & a-f'));
		encryptCodeEl.className = removeValidationCssClasses(encryptCodeEl.className);
		encryptCodeEl.className = addCssClass(encryptCodeEl.className, 'invalid');

		return;
	}

	// Set valid encryption class
	encryptCodeEl.className = removeValidationCssClasses(encryptCodeEl.className);
	encryptCodeEl.className = addCssClass(encryptCodeEl.className, 'valid');

	// Check if at least 1 File is given
	if(fileUrlEl.files.length < 1) {
		alert(lang.strings['error.enDecrypt.noFileSelected']);

		return;
	}

	var decrypter = new Decrypter(encryptionCode);
	decrypter.ignoreFakeHeader = ! verifyHeader;
	if(verifyHeader) {
		// Handle Header details
		headerLenEl.className = removeValidationCssClasses(headerLenEl.className);
		if(! isNaN(headerLen) && Math.floor(headerLen) > 0)
			decrypter.headerLen = Math.floor(headerLen);
		else if(headerLen) {
			headerLenEl.className = addCssClass(headerLenEl.className, 'invalid');
			alert(lang.strings['warn.enDecrypt.header.invalidLength'].replace('{0}', decrypter.defaultHeaderLen));
		}

		signatureEl.className = removeValidationCssClasses(signatureEl.className);
		if(Decrypter.checkHexChars(signature))
			decrypter.signature = signature;
		else if(signature) {
			signatureEl.className = addCssClass(signatureEl.className, 'invalid');
			alert(lang.strings['warn.enDecrypt.header.invalidSignature']
				.replace('{0}', '0-9 & A-F & a-f')
				.replace('{1}', decrypter.defaultSignature));
		}

		versionEl.className = removeValidationCssClasses(versionEl.className);
		if(Decrypter.checkHexChars(version))
			decrypter.version = version;
		else if(version) {
			versionEl.className = addCssClass(versionEl.className, 'invalid');
			alert(lang.strings['warn.enDecrypt.header.invalidVersion']
				.replace('{0}', '0-9 & A-F & a-f')
				.replace('{1}', decrypter.defaultVersion));
		}

		remainEl.className = removeValidationCssClasses(remainEl.className);
		if(Decrypter.checkHexChars(remain))
			decrypter.remain = remain;
		else if(remain) {
			remainEl.className = addCssClass(remainEl.className, 'invalid');
			alert(lang.strings['warn.enDecrypt.header.invalidRemain']
				.replace('{0}', '0-9 & A-F & a-f')
				.replace('{1}', decrypter.defaultRemain));
		}
	}

	// Process all Files
	var buttonsEnabled = false; // Just trigger that event one time this loop
	for(var i = 0; i < fileUrlEl.files.length; i++) {
		var rpgFile = new RPGFile(fileUrlEl.files[i], null);
		rpgFile.rpgMakerMz = rpgMakerType === RPGFile.typeMZ;

		if(decrypt) {
			decrypter.decryptFile(rpgFile, function(rpgFile, exception) {
				// Output Decrypted file
				for(var n = 0; n < outputEls.length; n++) {
					if(exception !== null)
						outputEls[n].appendChild(rpgFile.createOutPut(exception.toString()));
					else {
						rpgFile.convertExtension(true);
						outputEls[n].appendChild(rpgFile.createOutPut(null));
						zip.addFile(rpgFile);
					}
				}

				if(! buttonsEnabled && exception === null) {
					enableFileButtons('clearFileList', 'zipSave');
					buttonsEnabled = true;
				}
			});
		} else {
			decrypter.encryptFile(rpgFile, function(rpgFile, exception) {
				// Output Encrypted file
				for(var n = 0; n < outputEls.length; n++) {
					if(exception !== null)
						outputEls[n].appendChild(rpgFile.createOutPut(exception.toString()));
					else {
						rpgFile.convertExtension(false);
						outputEls[n].appendChild(rpgFile.createOutPut(null));
						zip.addFile(rpgFile);
					}
				}

				if(! buttonsEnabled && exception === null) {
					enableFileButtons('clearFileList', 'zipSave');
					buttonsEnabled = true;
				}
			});
		}
	}
}

/**
 * Clears the File-List & disables the ZIP-Save-Button
 *
 * @param {string} fileListClass - Class-Name of the File-List
 * @param {string} zipSaveButtonClass - Class-Name of the ZIP-Save Button
 * @param {string} clearFileListButtonClass - Class-Name of the Clear-File-List Button
 */
function clearFileList(fileListClass, zipSaveButtonClass, clearFileListButtonClass) {
	var fileListEls = document.getElementsByClassName(fileListClass);
	var zipSaveButtonEls = document.getElementsByClassName(zipSaveButtonClass);
	var clearFileListButtonEls = document.getElementsByClassName(clearFileListButtonClass);

	var i;
	for(i = 0; i < fileListEls.length; i++)
		fileListEls[i].innerHTML = '';

	for(i = 0; i < zipSaveButtonEls.length; i++)
		zipSaveButtonEls[i].disabled = 'disabled';

	for(i = 0; i < clearFileListButtonEls.length; i++)
		clearFileListButtonEls[i].disabled = 'disabled';

	// Dispose old ZIP Object (Clear Memory)
	zip.dispose();
}

/**
 * ReEnables the Buttons for the File-List
 *
 * @param {string} clearFileListButtonClass - Class-Name of the Clear-File-List Button
 * @param {string} zipSaveButtonClass - Class-Name of the ZIP-Save Button
 */
function enableFileButtons(clearFileListButtonClass, zipSaveButtonClass) {
	var clearFileListButtonEls = document.getElementsByClassName(clearFileListButtonClass);
	var zipSaveButtonEls = document.getElementsByClassName(zipSaveButtonClass);

	var i;
	for(i = 0; i < clearFileListButtonEls.length; i++)
		clearFileListButtonEls[i].disabled = '';

	for(i = 0; i < zipSaveButtonEls.length; i++)
		zipSaveButtonEls[i].disabled = '';
}

/**
 * Encodes text HTML-Special Characters
 *
 * @param {string} s - Unencoded String
 * @returns {string} - Encoded String
 */
function html(s) {
	var el = document.createElement("div");
	el.innerText = el.textContent = s;
	s = el.innerHTML;
	return s.replaceAll(/"/g, '&quot;')
		.replaceAll(/'/g, '&apos;')
		.replaceAll('#', '&num;');
}

/**
 * Escapes Titles/Alt-Tags
 *
 * @param {string} s - Enencoded String
 * @returns {string} - Encoded String
 */
function escapeTitle(s) {
	s = html(s);

	return s.replaceAll('&quot;', '\'\'')
		.replaceAll('&apos;', '\'')
		.replaceAll('&num;', '#')
		.replaceAll('&amp;', '&');
}

/**
 * Saves the current Files as ZIP
 */
function saveZip() {
	zip.save();
}
