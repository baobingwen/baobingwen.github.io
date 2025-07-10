var lang_de = { // Ignore this line

	// ===== Base-Data - Please fill these out =====
	'languageName': 'German', // Name of your language in english
	'localizedLanguageName': 'Deutsch', // keep this as null unless the localized name of your language is different
	'flagAltText': 'Deutsche Flagge', // will be displayed if the flag-icon of your language cannot be shown
	'htmlLang': 'de', // Keep empty if unsure

	// Add all translation authors here
	'translatedBy': [
		{
			'name': 'Petschko',
			'url': 'https://petschko.org/'
		}
	],
	// ========== Config done =========

	// Images Alt-Names (Shown when images cannot be loaded)
	'images.alt.ukFlag': 'UK Flagge',
	'images.alt.deFlag': 'Deutsche Flagge',
	'images.alt.chFlag': 'Chinesische Flagge',
	'images.alt.projectIcon': 'Projekt Icon (Schatztruhe mit Schlüssel)',
	'images.alt.brokenLock': '(Zerbrochenes Schloss)',
	'images.alt.lock': '(Schloss)',
	'images.alt.validCss': 'CSS ist valide!',

	// Meta-Information
	'title': 'RPG-Maker-MV & MZ Entschlüsselungs-Tool von Petschko',

	// Header Information
	'header.language': 'Sprache',
	'header.title': 'Petschkos RPG-Maker MV & MZ-Datei Entschlüsselungstool',

	// Nav-Tab Items
	'tab.home': 'Start',
	'tab.enDecrypt': 'Ver- & Entschlüsseln',
	'tab.restoreImages': 'Bilder wiederherstellen (Ohne Code)',
	'tab.browserSupport': 'Browser Unterstützung',
	'tab.howToUse': 'Anleitung',
	'tab.credits': 'Credits',
	'tab.about': 'Über',

	// Headings
	'h.fileList': 'Datei-Liste',
	'enDecrypt.h.selectFilesAndInfo': 'Dateien & Infos angeben',
	'enDecrypt.h.headerInfo': 'Header-Info',
	'restore.h.selectFiles': 'RPGMVP / PNG_ Dateien auswählen',
	'browserSupport.h': 'Browser-Unterstützung',
	'howToUse.h': 'Anleitung',
	'credits.h': 'Credits',
	'credits.h.code': 'Code-Credits',
	'credits.h.image': 'Bild-Credits',

	// Form Box-Headings
	'enDecrypt.formBox.decryptCode': 'Entschlüsselungscode',
	'enDecrypt.formBox.advanced': 'Erweitert',
	'formBox.selectFiles': 'Datei(en) auswählen',
	'formBox.fileList': 'Datei(en) herunterladen',

	// Buttons & UI Elements
	'tooltip.i': 'i', // Tooltip-Element (i) - Info element
	'tooltip.question': '?', // Tooltip-Element (?) - Help element
	'tooltip.details': 'Details', // Tooltip-Element (details) - Details element
	'files.dragAndDrop': '(oder) ziehe Dateien hierher.',
	'button.view': 'Ansehen',
	'button.save': 'Speichern',
	'button.saveAllAsZip': 'Speichere alle als ZIP-Datei',
	'button.clearFiles': 'Datei-Liste leeren',
	'button.gotoRestorePage': 'Bitte klicke hier, um Bilder ohne Entschlüsselungscode wiederherzustellen',
	'home.button.restoreImages': '(Ohne Code) Bilder eines Spieles wiederherstellen',
	'home.button.enDecryptImages': 'Ver/Entschlüssele Dateien zu/von einem Spiel',
	'enDecrypt.label.decryptCodeFile': 'Wähle eine {0} oder "{1}"/"{2}" Datei und klicke auf {3}!', // 0 => "System(.json)", 1 => ".rpgmvp", 2 => ".png_", 3 => Detect-Button-Text
	'enDecrypt.label.decryptCode': 'Ver/Entschlüsselungscode',
	'enDecrypt.label.files': 'Ver/Entschlüsselungs-Datei(en)',
	'enDecrypt.label.verifyHeader': 'Vorgetäuschten Dateikopf verifizieren?',
	'enDecrypt.label.verifyHeader.yes': 'Ja',
	'enDecrypt.label.verifyHeader.no': 'Nein (Ignoriere Dateikopf)',
	'enDecrypt.label.no': 'Nein',
	'enDecrypt.label.header.length': 'Dateikopf-Länge {0}', // 0 => In Bytes Text (Italic)
	'enDecrypt.label.header.length.byteNote': '(In Bytes)',
	'enDecrypt.label.header.signature': 'Dateikopf-Signatur',
	'enDecrypt.label.header.version': 'Dateikopf-Version',
	'enDecrypt.label.header.remain': 'Dateikopf-Rest',
	'enDecrypt.button.detect': 'Erkennen',
	'enDecrypt.button.headerValues.show': 'Header-Werte ({0})', // 0 => Show or Hide (Next 2 Lines)
	'enDecrypt.button.headerValues.show.show': 'Anzeigen',
	'enDecrypt.button.headerValues.show.hide': 'Verbergen',
	'enDecrypt.button.resetHeaderVal': 'Setze die Dateikopfwerte zurück',
	'enDecrypt.button.decrypt': 'Entschlüsseln',
	'enDecrypt.button.mv.encrypt': 'Verschlüsseln MV',
	'enDecrypt.button.mz.encrypt': 'Verschlüsseln MZ',
	'restore.label.files': 'Wähle wiederherzustellende Datei/en aus',
	'restore.button.restoreOriginalImages': 'Originale Bilder wiederherstellen',

	// Error/Warning/Info Messages
	'exception.errorCode': 'Fehler-Code',
	'exception.emptyFile': 'Die Datei ist leer oder dein Browser konnte sie nicht lesen...',
	'exception.invalidFakeHeader.1': 'Der aktuelle vorgetäuschte Dateikopf stimmt nicht mit der Dateikopfvorlage überein.',
	'exception.invalidFakeHeader.2': 'Stelle sicher, dass du eine verschlüsselte Datei verwendest. - Wenn du sicher bist, schalte die Dateikopfprüfung aus und versuche es erneut.',
	'exception.reportBug': 'Bitte melde diesen Fehler',
	'exception.helper.invalidByte': 'Ungültiger Byte-Wert ({0})', // 0 => Byte-Value
	'error': 'Fehler',
	'error.detect.noFile': 'Bitte wähle die {0}-Datei oder ein verschlüsseltes Bild ({1}-Dateien) aus!', // 0 => "System(.json)", 1 => ".rpgmvp / .png_"
	'error.detect.invalidJsonFile': 'Fehler: Der Dateiinhalt ist ungültig (Es ist kein JSON und kein verschlüsseltes Bild - {0})', // 0 => ".json/.rpgmvp/.png_"
	'error.detect.keyNotFound.1': 'Fehler: Der Entschlüsselungscode konnte nicht gefunden werden - Stelle sicher, dass du die richtige Datei ausgewählt hast!',
	'error.detect.keyNotFound.2': 'Du kannst auch verschlüsselte Bilder ({0}) nutzen, um den Schlüssel zu erkennen!', // 0 => ".rpgmvp / .png_"
	'error.detect.keyNotFound.3': 'In seltenen Fällen ist der Schlüssel im Spiel versteckt. Versuche diese Schritte:',
	'error.detect.keyNotFound.3.1': 'Öffne den unten angegeben Link und kopiere den Code',
	'error.detect.keyNotFound.3.2': 'Füge den Code in der letzten Zeile in dieser Datei ein: {0}', // 0 => "./www/js/rpg_core(.js)"
	'error.detect.keyNotFound.3.3': 'Speichere die Datei',
	'error.detect.keyNotFound.3.4': 'Starte das Spiel und kopiere den Schlüssel',
	'error.restore.noFileSelected': 'Wähle mindestens 1 Datei aus, die wiederhergestellt werden soll...',
	'error.enDecrypt.noCode': 'Gebe den Ver/Entschlüsselungscode an!',
	'error.enDecrypt.invalidCode': 'Ver/Entschlüsselungscode darf nur HEX-Zeichen ({0}) enthalten!', // 0 => "0-9 & A-F & a-f"
	'error.enDecrypt.noFileSelected': 'Wähle mindestens 1 Datei aus, die Ver/Entschlüsselt werden soll...',
	'error.zip.emptyZip': 'Es konnte keine ZIP Datei erstellt werden, die ZIP-Datei währe leer...',
	'info.detect.keyFound': 'Schlüssel gefunden^^! ({0})', // 0 => Encryption-Key
	'warn.enDecrypt.header.invalidLength': 'Info: Die Dateikopf-Länge muss eine positive, runde Nummer sein! (Nutze nun den Standardwert: {0})', // 0 => Default Header Length value
	'warn.enDecrypt.header.invalidSignature': 'Info: Die Dateikopf-Signatur darf nur HEX-Zeichen ({0}) enthalten! (Nutze nun den Standardwert: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Signature
	'warn.enDecrypt.header.invalidVersion': 'Info: Die Dateikopf-Version darf nur HEX-Zeichen ({0}) enthalten! (Nutze nun den Standardwert: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Version
	'warn.enDecrypt.header.invalidRemain': 'Info: Der Dateikopf-Rest darf nur HEX-Zeichen ({0}) enthalten! (Nutze nun den Standardwert: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Remain
	'confirm.resetHeaderValues': 'Bist du sicher, dass du die Dateikopfwerte auf Standard zurücksetzen möchtest?',

	// == Content: Hidden-Info ==
	'info.information.1': 'Information',
	'info.information.2': 'Ich have {0} meines Projektes "{1}" veröffentlicht, welches ganze Ordner entschlüsselt und Dateien automatisch speichert/umbenennt...', // 0 => "released an Alpha-Version"-Releases-Link, 1 => "Java-RPG-Maker-MV-Decrypter"-Project-Link
	'info.information.2.releaseLink': 'eine Alpha-Version',
	'info.information.2.projectLink': 'Java-RPG-Maker-MV-Decrypter',
	'info.information.3': 'Eventuell möchtest du es ausprobieren, es hat auch eine grafische Oberfläche. Wenn du nur einzelne Dateien entschlüsseln möchtest, empfehle ich diese Version hier, {0}. Allerdings ist die Java-Version dieses Tools für ganze Ordner besser geeignet! =)', // 0 => No download argument
	'info.information.3.noDownload': 'da du sie nicht herunterladen mußt',

	// == Content: Home ==
	'home.content.welcome.1': 'Willkommen zu dem RPG-Maker MV & MZ-Datei Entschlüsselungstool. Hier kannst du Dateien von jedem RPG Maker-MV/MZ Projekt entschlüsseln, welche die eingebaute Verschlüsselungsmethode benutzen. Du kannst die Dateien auch wieder zurück verschlüsseln (Dies wird hauptsächlich für Übersetzungen genutzt).',
	'home.content.welcome.2': 'Bitte benutze dieses Tool nicht, um Assets zu stehlen und wiederzuverwenden! Es ist okay, wenn du z.B. die Bilder des Spiels ansehen oder abspeichern möchtest (In den meisten Ländern ist dies gesetzlich in Ordnung, da es private Nutzung ist). Bitte stehle keine Dateien von anderen, um neue Spiele daraus zu machen, bleib fair!',
	'home.content.whatToDoSelection': 'Bitte wähle aus, was du nun tun möchtest',

	// == Content: En- & Decrypt ==
	'enDecrypt.content.1': 'PNG-Dateien (Bilder - "{0}-Dateien") benötigen keinen Entschlüsselungscode, {1} wenn du sie wiederverschlüsseln möchtest.', // 0 => ".rpgmvp & .png_", 1 => "except" (bold txt)
	'enDecrypt.content.2': 'In diesem Bereich kannst du Dateien von RPG-Maker MV & MZ Spielen entschlüsseln und auch wiederverschlüsseln.',
	'enDecrypt.content.3': 'Du kannst den Entschlüsselungscode von einer dieser Dateien bekommen',
	'enDecrypt.content.3.mv': 'RPG-Maker MV',
	'enDecrypt.content.3.mz': 'RPG-Maker MZ',
	'enDecrypt.content.3.text': '"Spiel-Ordner"{0} oder irgendein verschlüsseltes Bild (Eine "{1}"-Datei)', // 0 => path to system.json, 1 => File-extension
	'enDecrypt.content.4': 'Drücke auf "{0}", nachdem du die {1} Datei ausgewählt hast. Sofern du den Entschlüsselungscode kennst, kannst du ihn auch einfach in das Textfeld eintragen.', // 0 => Detect-Button-Text, 1 => "System(.json)"
	'enDecrypt.content.header.info': 'Wann muss ich diese Werte ändern?',
	'enDecrypt.content.header.decryption': 'Entschlüsselung',
	'enDecrypt.content.header.encryption': 'Verschlüsselung',

	// == Content: Restore ==
	'restoreImages.content': 'In diesem Bereich kannst du {0}-Dateien (Bilder - "{1}-Dateien") von RPG-Maker Spielen wiederherstellen, ohne den Entschlüsselungscode zu kennen.', // 0 => "PNG", 1 => ".rpgmvp & .png_"

	// == Content: Browser Support ==
	'browserSupport.note': 'Bitte beachte, dass dieses Tool mit dem {0} getestet und entwickelt wurde. Du kannst mithelfen, dass dieses Tool in allen Browsern läuft, indem du {1}!', // 0 => "Firefox", 1 => Report bugs-Link
	'browserSupport.note.reportBugsLink': 'Fehler meldest',
	'browserSupport.note.first': 'Zuerst',
	'browserSupport.unknown': 'Unbekannt',
	'browserSupport.unusable': 'Unbenutzbar',
	'browserSupport.partialUsable': 'Teilweise benutzbar',
	'browserSupport.almostCompleteUsable': 'Fast komplett benutzbar',
	'browserSupport.usable': 'Benutzbar',
	'browserSupport.outOfSupport': 'Kein Support mehr',
	'browserSupport.feature.downloadFiles': 'Dateien herunterladen',
	'browserSupport.feature.viewFiles': 'Dateien ansehen',
	'browserSupport.feature.enDecrypt': 'Ver/Entschlüsseln',
	'browserSupport.feature.zipDownload': 'ZIP-Download',
	'browserSupport.browser.ie': 'Internet-Explorer',
	'browserSupport.browser.edge': 'Edge',
	'browserSupport.browser.chrome': 'Google-Chrome',
	'browserSupport.browser.firefox': 'Firefox',
	'browserSupport.browser.safari': 'Safari',
	'browserSupport.browser.opera': 'Opera',

	// == Content: How to use ==
	'howToUse.content.or': 'oder',
	'howToUse.content.new': 'Neu',
	'howToUse.content.except': 'außer',
	'howToUse.content.1.1': 'Prüfe, ob die verschlüsselten Dateien eine der Dateiendungen {0} haben - Wenn dies der Fall ist, kannst du dieses Script nutzen.', // 0 => All-Valid Files extensions
	'howToUse.content.1.2': 'Sofern du Dateien WIEDERVERSCHLÜSSELN möchtest, haben sie normalerweise eine Dateiendung wie "{0}" oder ähnliches =)', // 0 => ".png"
	'howToUse.content.2.1': 'Den Entschlüsselungscode erhalten',
	'howToUse.content.2.2': '{0}-Dateien (Bilder - "{1}-Dateien") benötigen keinen Entschlüsselungscode, {2} du möchtest sie wiederverschlüsseln.', // 0 => "PNG", 1 => ".rpgmvp & .png_", 2 => "except"
	'howToUse.content.2.ul.1': 'Lade die {0} Datei von dem Spiel hoch und lass den Code automatisch erkennen. (Klicke auf "{1}", nachdem du die {0} ausgewählt hast)', // 0 => "System(.json)", 1 => Detect-Button-Text
	'howToUse.content.2.ul.2': 'Sofern die Erkennung nicht funktioniert, werden weitere Instruktionen erscheinen',
	'howToUse.content.3.1': 'Wähle die Datei(en) zum Ver-/Entschlüsseln aus',
	'howToUse.content.3.2': 'Es können mehrere Dateien gleichzeitig ausgewählt werden!',
	'howToUse.content.4': 'Drücke auf den Ver- oder Entschlüssel-Button',
	'howToUse.content.5.1': 'Wenn du auf "{0}" neben dem Dateinamen klickst, kannst du dir die entschlüsselte Datei ansehen.', // 0 => View Button Name
	'howToUse.content.5.2': 'Selbstverständlich kannst du neu verschlüsselte Dateien nicht ansehen.',
	'howToUse.content.6': 'Zum Speichern klicke auf "{0}". (Das Skript behält den original Dateinamen bei und ändert die Dateierweiterung automatisch für dich) =)', // 0 => Save Button Name
	'howToUse.content.6.ul.1': 'Du kannst auch alle Dateien der Datei-Liste als ZIP-Datei abspeichern, indem du auf "{0}" klickst!', // 0 => Save all as Zip Button-Name

	// == Content: Credits ==
	'credits.anonymous': 'Anonym',
	'credits.anonymous.explanation': 'Dieser Nutzer möchte anonym bleiben, allerdings hat dieser das rausgefunden',
	'credits.forProject': 'Für das Erstellen des Projektes',
	'credits.forLib': 'Für die {0}-Bibliothek', // 0 => Lib-Name
	'credits.betterInterface': 'Für die bessere Oberfläche',
	'credits.noKey': 'Für den Tipp, um {0} ohne Entschlüsselungscode wiederherzustellen', // 0 => "PNGs"
	'credits.chrome.viewFile': 'Für die Hilfe beim Lösen des Chrome "Datei ansehen" Problems',
	'credits.icon': 'Icon',
	'credits.icons': 'Icons',
	'credits.lock': 'Schloss',
	'credits.unknownAuthor': 'Bitte {0}, ich kann die Quelle nicht mehr finden und dich hinzufügen!', // 0 => E-Mail-Link
	'credits.emailLink': 'sende mir eine E-Mail',

	// == Content: Tooltips ==
	'tooltip.content.infoZipDownload': 'Es gibt eine Größenlimitierung, diese hängt von deinem Browser und Arbeitsspeicher ab... Um VIELE Dateien ({0}) zu verarbeiten, nutze besser das Java-Entschlüsselungstool!', // 0 => "500+mb"
	'tooltip.content.infoClearFiles': 'Entfernt alle Dateien aus der Liste unten',
	'tooltip.content.viewEncryptedFileInfo': 'Diese Datei ist verschlüsselt, daher kannst du sie nicht in deinem Browser ansehen. Du kannst es speichern und in das Spiel packen (z.B. übersetzte Bilder).',
	'tooltip.content.gameDir': 'Spiel-Ordner',
	'tooltip.content.summary': 'Zusammenfassung',
	'enDecrypt.tooltip.content.headerInfo': 'Experten Einstellungen! Normalerweise musst du hier nichts ändern! (Nur in SEHR WENIGEN Fällen)',
	'enDecrypt.tooltip.content.verifyHeader.help.1': 'Dies prüft, ob der Dateikopf korrekt ist (Beginn der Datei).',
	'enDecrypt.tooltip.content.verifyHeader.help.2': 'Der Dateikopf ist nur zum Wiederverschlüsseln wichtig. (Nicht relevant für die Entschlüsselung)',
	'enDecrypt.tooltip.content.verifyHeader.help.3': 'In {0} Fällen benutzen manche Spiele andere Dateikopfeinstellungen. Du findest die richtigen Einstellungen des Spiels in:', // 0 => "very rare" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.help.3.rare': 'sehr wenigen',
	'enDecrypt.tooltip.content.verifyHeader.help.4': 'Suche nach "{0}", um alle Werte zu finden.', // 0 => "function Decrypter()"
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1': 'Ignoriert den Dateikopf',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1.warning': 'Warnung',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.2': 'Bei falscher Nutzung können falsch verschlüsselte Dateien entstehen! (Es wird z.B. trotzdem entschlüsselt, obwohl die Datei nicht verschlüsselt war, danach ist die neue Datei nutzlos.)',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.3': 'Nutze "{0}" nur, wenn du sicher bist, dass es sich um eine verschlüsselte Datei des RPG-Makers handelt!', // 0 => No-Button Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.1': 'Normalerweise benötigst du den Dateikopf nicht zum Entschlüsseln.',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.2': 'Er wird einfach nur entfernt',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.3': 'Er wird hauptsächlich dazu benutzt, um zu prüfen, ob es sich um eine RPG-Maker verschlüsselte Datei handelt^^',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary': 'Du {0} jede RPG-Maker-Datei entschlüsseln, ohne die korrekten Einstellungen für den Dateikopf zu kennen.', // 0 => "CAN" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.can': 'KANNST',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.2': 'Schalte die Prüfung ab, sofern der Dateikopf nicht verifiziert werden kann =)',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.3': 'Normalerweise funktioniert es mit den Standardeinstellungen.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.1': 'Sofern du eine Datei zurück in das Spiel bringen möchtest, BENÖTIGST du den Dateikopf. Das Spiel prüft, ob der Dateikopf gültig ist.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.2': 'Wenn der Dateikopf falsch ist, kann das Spiel die Datei nicht anzeigen...',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3': 'Du {0} den korrekten Dateikopf. Wenn der Dateikopf falsch ist, wird die Datei nicht anzeigt.', // 0 => "NEED" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3.need': 'BENÖTIGST',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.4': 'Normalerweise funktionieren die Standardeinstellungen für {0} von {1} Spielen.', // 0 => "99", 1 => "100"
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.5': 'Also versuche bitte erst die Standardeinstellungen und wenn diese dann nicht funktionieren, dann kannst du nach den richtigen Einstellungen suchen.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.6': 'Du kannst die richtigen Werte hier finden:',

	// Titles (Mouseover hints)
	'title.projectIcon': 'Ent- oder Verschlüssele RPG-Maker MV & MZ-Dateien',
	'title.dragAndDrop': 'Ziehe Dateien hierher oder wähle sie aus',
	'title.viewInBrowser': 'Sieh dir die Datei in deinem Browser an',
	'title.save': 'Speichere die Datei auf deinem Computer',
	'languages.title.selectDifferentLang': 'Wähle eine andere Sprache aus',
	'info.title.seeReleases': 'Schau dir die Alpha auf GitLab an',
	'info.title.seeProject': 'Besuche das Projekt auf GitLab',
	'browserSupport.title.reportBugs': 'Hilf mir, indem du Fehler meldest',

	// Footer
	'footer.createdBy': 'Script wurde von {0} erstellt', // 0 => "Petschko"-Link
	'footer.creator.title': 'Sende mir eine E-Mail, wenn du Probleme oder Fragen hast',
	'footer.visitRepo': 'Besuche das Repository auf GitLab',
	'footer.visitRepo.title': 'Besuche dieses Projekt auf GitLab',
	'footer.reportBugs': 'Bitte melde Fehler hier',
	'footer.reportBugs.title': 'Bitte melde Fehler, falls du welche entdeckst =) (Oder sende mir eine Mail)',
	'footer.translatedBy': 'Deutsche Übersetzung von {0}', // 0 => Translator name(s) and link(s) if given
	'footer.translatedByLinkTitle': 'Besuche die Webseite des Übersetzers',
	'footer.translateHelp': 'Übersetze oder behebe Schreibfehler',

} // Ignore this line
