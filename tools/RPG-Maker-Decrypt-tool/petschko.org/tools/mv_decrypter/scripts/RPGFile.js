/**
 * Author: Peter Dragicevic [peter@petschko.org]
 * Authors-Website: http://petschko.org/
 * Date: 01.04.2017
 * Time: 14:37
 */

/**
 * Creates a new instance of the RPGFile Object
 *
 * @param {File} file - File-Object
 * @param {undefined|string|null} blobUrl - Blob-URL if set else null
 * @constructor - RPGFile
 */
function RPGFile(file, blobUrl) {
	if(typeof blobUrl === 'undefined')
		blobUrl = null;

	this.file = file;
	this.fullName = this.file.name;
	this.name = null;
	this.extension = null;
	this.blob = null;
	this.fileUrl = blobUrl;
	this.content = null;

	/**
	 * Splits the FullName into name & file ext
	 */
	RPGFile.prototype.splitFileName = function() {
		var pointPos = this.fullName.lastIndexOf('.');

		if(pointPos < 1 || (pointPos + 1) === this.fullName.length) {
			this.name = this.fullName;
			return;
		}

		this.extension = this.fullName.substr(pointPos + 1);
		this.name = this.fullName.substr(0, pointPos);
	};
	this.splitFileName();

	/**
	 * Shows if the current file has an Encrypted File-Extension
	 *
	 * @returns {boolean} - true if Encrypted File-Extension else false
	 */
	RPGFile.prototype.isEncryptedExt = function() {
		const extension = this.extension.toLowerCase();
		const encryptedExts = ['rpgmvp', 'rpgmvm', 'rpgmvo', 'png_', 'ogg_', 'm4a_']; 
		
		return encryptedExts.includes(extension);
	};

	/**
	 * Shows if the current file is an encrypted image
	 *
	 * @returns {boolean} - true if its an encrypted image
	 */
	RPGFile.prototype.isEncryptedImg = function() {
		return (this.extension.toLowerCase() === 'rpgmvp' || this.extension.toLowerCase() === 'png_');
	};
}

/**
 * Disposes a RPG-File
 */
RPGFile.prototype.dispose = function() {
	if(this.fileUrl) {
		window.URL.revokeObjectURL(this.fileUrl);
		this.fileUrl = null;
	}
	if(this.blob)
		this.blob = null;

	this.file = null;
	this.fullName = null;
	this.name = null;
	this.extension = null;
	this.content = null;
};

/**
 * Creates the Output for the File
 *
 * @param {string|null} faultMessage - Error-Message or null if all is ok
 * @returns {Element} - Output-Element
 */
RPGFile.prototype.createOutPut = function(faultMessage) {
	var element = document.createElement('div');
	var fileNameEl = document.createElement('span');

	element.className = 'fileInfo';
	fileNameEl.innerHTML = this.name + '.' + this.extension;

	if(! faultMessage) {
		var viewLink;
		if(this.isEncryptedExt())
			viewLink = document.createElement('s');
		else
			viewLink = document.createElement('a');

		var saveFunction = document.createElement('a');

		// Set all to view the link
		if(! this.isEncryptedExt()) {
			viewLink.innerHTML = html(lang.strings['button.view']);
			viewLink.title = html(lang.strings['title.viewInBrowser']);
			viewLink.href = this.fileUrl;
			viewLink.target = '_blank';
			viewLink.className = lang.translateClass;
			viewLink.setAttribute(lang.translateableText, 'button.view');
			viewLink.setAttribute(lang.translateableTitle, 'title.viewInBrowser');
		} else { // span
			var viewText = document.createElement('span');
			viewText.innerHTML = html(lang.strings['button.view']);
			viewText.className = 'trl';
			viewText.setAttribute(lang.translateableText, 'button.view');

			var toolTipText = document.createElement('div');
			toolTipText.className = 'tooltipText ' + lang.translateClass;
			toolTipText.innerHTML = html(lang.strings['tooltip.content.viewEncryptedFileInfo']);
			toolTipText.setAttribute(lang.translateableText, 'tooltip.content.viewEncryptedFileInfo');

			viewLink.className = 'grey encryptedFile fileListTooltip tooltip';
			viewLink.appendChild(viewText);
			viewLink.appendChild(toolTipText);
		}

		// Set all to save file
		saveFunction.innerHTML = html(lang.strings['button.save']);
		saveFunction.className = 'save ' + lang.translateClass;
		saveFunction.title = html(lang.strings['title.save']);
		saveFunction.href = this.fileUrl;
		saveFunction.download = this.name + '.' + this.extension;
		saveFunction.target = '_blank';
		saveFunction.setAttribute(lang.translateableText, 'button.save');
		saveFunction.setAttribute(lang.translateableTitle, 'title.save');
	} else {
		var errorTxt = document.createElement('span');
		errorTxt.innerHTML = html(lang.strings['error']);
		errorTxt.className = lang.translateClass;
		errorTxt.setAttribute(lang.translateableText, 'error');

		var errorEl = document.createElement('span');
		errorEl.className = 'tooltip errorTooltip fileListTooltip';

		var tooltipError = document.createElement('span');
		tooltipError.innerHTML = faultMessage;
		tooltipError.className = 'tooltipText longText ' + lang.translateClass;

		errorEl.appendChild(errorTxt);
		errorEl.appendChild(tooltipError);

		// Add Error-CSS-Class
		element.className = addCssClass(element.className, 'errorFile');
	}

	// Mix all together^^
	element.appendChild(fileNameEl);
	if(! faultMessage) {
		element.appendChild(viewLink);
		element.appendChild(saveFunction);
	} else
		element.appendChild(errorEl);

	return element;
};

/**
 * Converts the current extension to an other extension
 *
 * @param {boolean} toNormal - Converts the current extension to a normal extension
 */
RPGFile.prototype.convertExtension = function(toNormal) {
	if(toNormal) {
		switch(this.extension.toLocaleLowerCase()) {
			case 'rpgmvp':
			case 'png_':
				this.extension = 'png';
				break;
			case 'rpgmvm':
			case 'm4a_':
				this.extension = 'm4a';
				break;
			case 'rpgmvo':
			case 'ogg_':
				this.extension = 'ogg';
		}
	} else {
		switch(this.extension.toLocaleLowerCase()) {
			case 'png':
				this.extension = this.rpgMakerMz ? 'png_' : 'rpgmvp';
				break;
			case 'm4a':
				this.extension = this.rpgMakerMz ? 'm4a_' : 'rpgmvm';
				break;
			case 'ogg':
				this.extension = this.rpgMakerMz ? 'ogg_' : 'rpgmvo';
		}
	}
};

/**
 * Creates the BLOB-URL for this File
 *
 * @param {boolean} toNormal - If the File is changed back to normal (used for the MIME-Type)
 */
RPGFile.prototype.createBlobUrl = function(toNormal) {
	this.blob = new Blob([this.content], {type: this.getMimeType(toNormal)});
	this.blob.type = this.getMimeType();
	this.fileUrl = window.URL.createObjectURL(this.blob);
};

/**
 * Return the MIME-Type of the File (Empty if not known)
 *
 * @param {boolean} toNormal -  If the File is changed back to normal
 * @returns {string} - Mime-Type
 */
RPGFile.prototype.getMimeType = function(toNormal) {
	if(toNormal) {
		switch(this.extension.toLocaleLowerCase()) {
			case 'png':
			case 'rpgmvp':
			case 'png_':
				return 'image/png';
			case 'm4a':
			case 'rpgmvm':
			case 'm4a_':
				return 'audio/m4a';
			case 'ogg':
			case 'rpgmvo':
			case 'ogg_':
				return 'audio/ogg';
			default:
				return '';
		}
	}

	return '';
};

RPGFile.prototype.rpgMakerMz = false;
RPGFile.typeMV = 1;
RPGFile.typeMZ = 2;
