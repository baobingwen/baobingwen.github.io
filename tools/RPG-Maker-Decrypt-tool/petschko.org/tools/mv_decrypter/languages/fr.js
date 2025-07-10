var lang_fr = { // Ignore this line

	// ===== Base-Data - Please fill these out =====
	'languageName': 'French', // Name of your language in english
	'localizedLanguageName': 'Français', // keep this as null unless the localized name of your language is different
	'flagAltText': 'Drapeau Français', // will be displayed if the flag-icon of your language cannot be shown
	'htmlLang': 'fr', // Keep empty if unsure

	// Add all translation authors here
	'translatedBy': [
		{
			'name': 'Rosie', // Add you name or delete the entire {} block
			'url': 'https://blankrose.dev/', // Add your website or leave empty
		}
	],
	// ========== Config done =========

	// Images Alt-Names (Shown when images cannot be loaded)
	'images.alt.ukFlag': 'Drapeau Anglais',
	'images.alt.deFlag': 'Drapeau Allemand',
	'images.alt.chFlag': 'Drapeau Chinois',
	'images.alt.frFlag': 'Drapeau Français',
	'images.alt.projectIcon': 'Icon de Project (Coffre avec une clef)',
	'images.alt.brokenLock': '(Cadenas Cassé)',
	'images.alt.lock': '(Cadenas)',
	'images.alt.validCss': 'CSS valide!',

	// Meta-Information
	'title': 'Décrypteur pour RPG-Maker-MV & MZ, par Petschko',

	// Header Information
	'header.language': 'Language',
	'header.title': 'Décrypteur de fichiers RPG-Maker MV & MZ de Petschko',

	// Nav-Tab Items
	'tab.home': 'Accueil',
	'tab.enDecrypt': 'En- & Décrypter',
	'tab.restoreImages': 'Restaurer des Images (Sans clef)',
	'tab.browserSupport': 'Navigateurs Supportés',
	'tab.howToUse': 'Mode d\'Emplois',
	'tab.credits': 'Crédits',
	'tab.about': 'A Propos',

	// Headings
	'h.fileList': 'Liste des Fichiers',
	'enDecrypt.h.selectFilesAndInfo': 'Sélectionner Fichiers & Info',
	'enDecrypt.h.headerInfo': 'Info d\'En-tête',
	'restore.h.selectFiles': 'Sélectionner les Fichiers RPGMVP / PNG_',
	'browserSupport.h': 'Navigateurs Supportés',
	'howToUse.h': 'Mode d\'Emplois',
	'credits.h': 'Crédits',
	'credits.h.code': 'Crédits du Code',
	'credits.h.image': 'Crédits des Images',

	// Form Box-Headings
	'enDecrypt.formBox.decryptCode': 'Décryption du Code',
	'enDecrypt.formBox.advanced': 'Avancée',
	'formBox.selectFiles': 'Sélectionner le(s) Fichier(s)',
	'formBox.fileList': 'Télécharger le(s) Fichier(s)',

	// Buttons & UI Elements
	'tooltip.i': 'i', // Tooltip-Element (i) - Info element
	'tooltip.question': '?', // Tooltip-Element (?) - Help element
	'tooltip.details': 'Détails', // Tooltip-Element (details) - Details element
	'files.dragAndDrop': '(ou) Glisser-Déposer les fichiers ici.',
	'button.view': 'Visualiser',
	'button.save': 'Sauvegarder',
	'button.saveAllAsZip': 'Tout sauvegarder en fichier ZIP',
	'button.clearFiles': 'Vider la liste de Fichiers',
	'button.gotoRestorePage': 'Suivre ce lien pour restaurer les images sans clef',
	'home.button.restoreImages': '(Sans Clef) Restaurer les images depuis un jeu',
	'home.button.enDecryptImages': 'En-/Décrypte les Fichiers vers/depuis un jeu',
	'enDecrypt.label.decryptCodeFile': 'Sélectionnez un fichier {0} ou "{1}"/"{2}" puis cliquez sur {3}!', // 0 => "System(.json)", 1 => ".rpgmvp", 2 => ".png_", 3 => Detect-Button-Text
	'enDecrypt.label.decryptCode': 'Code d\'en-/décryptage',
	'enDecrypt.label.files': 'En-/Décrypte le(s) Fichier(s)',
	'enDecrypt.label.verifyHeader': 'Verification d\'un Faux En-tête?',
	'enDecrypt.label.verifyHeader.yes': 'Oui',
	'enDecrypt.label.verifyHeader.no': 'Non (Ignorer)',
	'enDecrypt.label.no': 'Non',
	'enDecrypt.label.header.length': 'Taille de l\'En-Tête {0}', // 0 => In Bytes Text (Italic)
	'enDecrypt.label.header.length.byteNote': '(En Octets)',
	'enDecrypt.label.header.signature': 'Signature de l\'En-Tête',
	'enDecrypt.label.header.version': 'Version de l\'En-Tête',
	'enDecrypt.label.header.remain': 'Reste de l\'En-Tête',
	'enDecrypt.button.detect': 'Détecter',
	'enDecrypt.button.headerValues.show': 'Valeurs de l\'En-Tête ({0})', // 0 => Show or Hide (Next 2 Lines)
	'enDecrypt.button.headerValues.show.show': 'Afficher',
	'enDecrypt.button.headerValues.show.hide': 'Cacher',
	'enDecrypt.button.resetHeaderVal': 'Réinitialiser les Valeurs d\'En-Tête aux valeurs par défaut',
	'enDecrypt.button.decrypt': 'Décrypter',
	'enDecrypt.button.mv.encrypt': '(Re)-Encrypter MV',
	'enDecrypt.button.mz.encrypt': '(Re)-Encrypter MZ',
	'restore.label.files': 'Sélectionner le(s) ficher(s) à restaurer',
	'restore.button.restoreOriginalImages': 'Restaurer l\'(les) Image(s) Originaux',

	// Error/Warning/Info Messages
	'exception.errorCode': 'Code d\'Erreur',
	'exception.emptyFile': 'Fichier vide, ou ne peut être lu par votre navigateur...',
	'exception.invalidFakeHeader.1': 'Le faux en-tête ne correspond à aucune modèle.',
	'exception.invalidFakeHeader.2': 'Veillez vous assurer que vous utilisez un fichier encrypté. Si oui, désactivez l\'option "Faux En-Tête" et réessayez.',
	'exception.reportBug': 'Veillez signaler ce bug',
	'exception.helper.invalidByte': 'Valeur d\'Octet Invalide ({0})', // 0 => Byte-Value
	'error': 'Erreur',
	'error.detect.noFile': 'Veillez choisir un fichier {0} ou une image encryptée {1}!', // 0 => "System(.json)", 1 => ".rpgmvp / .png_"
	'error.detect.invalidJsonFile': 'Erreur: Contenue du Fichier invalid (N\'est pas un fichier JSON ou une image encryptée - {0})', // 0 => ".json/.rpgmvp/.png_"
	'error.detect.keyNotFound.1': 'Erreur: Clef d\'Encryption non trouvée - Veillez vous assurer que le fichier est correct!',
	'error.detect.keyNotFound.2': 'Vous pouvez également utiliser une image encryptée ({0}) pour détecter la clef!', // 0 => ".rpgmvp / .png_"
	'error.detect.keyNotFound.3': 'Dans des circonstances rares, la clef est cachée ou obfusquée dans le jeu. Essayez ces étapes:',
	'error.detect.keyNotFound.3.1': 'Ouvrez le lien ci-dessous et copiez le code',
	'error.detect.keyNotFound.3.2': 'Collez le code dans la dernière ligne du fichier: {0}', // 0 => "./www/js/rpg_core(.js)"
	'error.detect.keyNotFound.3.3': 'Sauvegardez le fichier',
	'error.detect.keyNotFound.3.4': 'Lancez le jeu et copiez le code',
	'error.restore.noFileSelected': 'Spécifiez au moins 1 fichier à restaurer...',
	'error.enDecrypt.noCode': 'Spécifiez le code d\'En-/Décryption!',
	'error.enDecrypt.invalidCode': 'Le code d\'En-/Décryption ne comprend que des caractères hexadécimaux ({0})!', // 0 => "0-9 & A-F & a-f"
	'error.enDecrypt.noFileSelected': 'Spécifiez au moins 1 fichier a en-/décrypter...',
	'error.zip.emptyZip': 'Impossible de proposer un fichier ZIP. Ce dernier serait vide...',
	'info.detect.keyFound': 'Clef trouvée ^^! ({0})', // 0 => Encryption key
	'warn.enDecrypt.header.invalidLength': 'Info: La taille de l\'en-tête doit être positive! (Utilise la valeur par défaut: {0})', // 0 => Default Header Length value
	'warn.enDecrypt.header.invalidSignature': 'Info: La signature de l\'en-tête ne doit contenir que des caractères hexadécimaux ({0})! (Utilise la valeur par défaut: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Signature
	'warn.enDecrypt.header.invalidVersion': 'Info: La version de l\'en-tête ne doit contenir que des caractères hexadécimaux ({0})! (Utilise la valeur par défaut: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Version
	'warn.enDecrypt.header.invalidRemain': 'Info: Le reste de l\'en-tête ne doit contenir que des caractères hexadécimaux ({0})! (Utilise la valeur par défaut: {1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Remain
	'confirm.resetHeaderValues': 'Voulez-vous vraiment réinitialiser les Valeurs d\'En-Tête aux valeurs par défaut?',

	// == Content: Hidden-Info ==
	'info.information.1': 'Information',
	'info.information.2': 'J\'ai {0} de mon projet "{1}", qui fonctionne avec des dossiers complets et permet de sauvegarder et renommer des fichiers automatiquement...', // 0 => "released an Alpha-Version"-Releases-Link, 1 => "Java-RPG-Maker-MV-Decrypter"-Project-Link
	'info.information.2.releaseLink': 'sortie une version alpha',
	'info.information.2.projectLink': 'Java-RPG-Maker-MV-Decrypter',
	'info.information.3': 'Il contient une interface utilisateur que vous pouvez essayer! Si vous voulez décrypter des fichiers seuls, alors je recommande cette version, {0}. Pour dossiers entiers, vous pouvez essayer la version rédigée en Java! =)',
	'info.information.3.noDownload': 'qui ne nécessite pas d\'être téléchargé',

	// == Content: Home ==
	'home.content.welcome.1': 'Bienvenue sur le décrypteur de fichiers RPG-Maker MV & MZ. Vous pouvez facilement décrypter des fichiers venant de n\'importe quel projet RPG-MV/RPG-MZ, qui ont été encryptés par le système d\'encryptions de base fourni par leurs logiciels respectifs. Vous pouvez même les re-encrypter par la suite (principalement utilisé pour des raisons de traductions).',
	'home.content.welcome.2': 'Merci de ne pas utiliser cet outil pour voler des ressources. Si vous souhaitez simplement consulter les images (ce qui est généralement autorisé à des fins privées par la plupart des lois), allez-y, mais ne les volez pas.',
	'home.content.whatToDoSelection': 'Sélectionnez ce que vous voulez faire',

	// == Content: En- & Decrypt ==
	'enDecrypt.content.1': 'Les fichiers PNG (Fichiers images "{0}") n\'utilise pas de code de décryption, {1} si vous voulez les re-encrypter.', // 0 => ".rpgmvp & .png_", 1 => "except" (bold txt)
	'enDecrypt.content.2': 'Dans cette partie, vous pouvez De- et (Re-)Encrypter les fichiers depuis des jeux RPG-Maker MV & MZ.',
	'enDecrypt.content.3': 'Vous pouvez obtenir le code de décryption depuis les fichiers:',
	'enDecrypt.content.3.mv': 'RPG-Maker MV',
	'enDecrypt.content.3.mz': 'RPG-Maker MZ',
	'enDecrypt.content.3.text': '"Dossier du Jeux"{0} ou toute autre images encryptées (Fichier "{1}")', // 0 => path to system.json, 1 => File-extension
	'enDecrypt.content.4': 'Cliquez sur "{0}" après avoir sélectionné le fichier {1}. Si vous connaissez la clef, vous pouvez directement la noter dans la zone de texte prévue à cet effet.', // 0 => Detect-Button-Text, 1 => "System(.json)"
	'enDecrypt.content.header.info': 'Quand est-ce que j\'ai besoin de changer ces paramètres?',
	'enDecrypt.content.header.decryption': 'Décryption',
	'enDecrypt.content.header.encryption': 'Encryption',

	// == Content: Restore ==
	'restoreImages.content': 'Dans cette partie, vous pouvez restaurer des images {0} (fichiers {1}) depuis les jeux RPG Maker sans la clef de décryption.', // 0 => "PNG", 1 => ".rpgmvp & .png_"

	// == Content: Browser Support ==
	'browserSupport.note': 'Ce script a seulement êté rédigé et testé sur {0}. Vous pouvez m\'aider ã le faire fonctionner sur les navigateurs en {1}!', // 0 => "Firefox", 1 => Report bugs-Link
	'browserSupport.note.reportBugsLink': 'reportant les bugs',
	'browserSupport.note.first': 'A noter',
	'browserSupport.unknown': 'Inconnue',
	'browserSupport.unusable': 'Instable',
	'browserSupport.partialUsable': 'Partiellement utilisable',
	'browserSupport.almostCompleteUsable': 'Presque fonctionnel',
	'browserSupport.usable': 'Fonctionnel',
	'browserSupport.outOfSupport': 'Non supporté',
	'browserSupport.feature.downloadFiles': 'Télécharger les fichiers',
	'browserSupport.feature.viewFiles': 'Visualiser les fichiers',
	'browserSupport.feature.enDecrypt': 'En-/Décrypter',
	'browserSupport.feature.zipDownload': 'Télécharger les fichiers ZIP',
	'browserSupport.browser.ie': 'Internet Explorer',
	'browserSupport.browser.edge': 'Edge',
	'browserSupport.browser.chrome': 'Google Chrome',
	'browserSupport.browser.firefox': 'Firefox',
	'browserSupport.browser.safari': 'Safari',
	'browserSupport.browser.opera': 'Opera',

	// == Content: How to use ==
	'howToUse.content.or': 'ou',
	'howToUse.content.new': 'Nouveau',
	'howToUse.content.except': 'sauf',
	'howToUse.content.1.1': 'Vérifiez que le fichier encrypté contient bien l\'extension {0} - Si tel est que le cas, vous pouvez utiliser ce script.', // 0 => All-Valid Files extensions
	'howToUse.content.1.2': 'Si vous voulez encrypter des fichiers, ils ont généralement une extension tel que "{0}" ou similaire. =)', // 0 => ".png"
	'howToUse.content.2.1': 'Obtenez le code d\'en-/décryptage.',
	'howToUse.content.2.2': 'Les fichiers {0} (Fichier images "{1}") n\'ont pas besoin de code, {2} si vous voulez les re-encrypter.', // 0 => "PNG", 1 => ".rpgmvp & .png_", 2 => "except"
	'howToUse.content.2.ul.1': 'Télécharger vers le site le fichier {0} depuis le jeu puis détectez le code automatiquement, en cliquant sur "{1}".', // 0 => "System(.json)", 1 => Detect-Button-Text
	'howToUse.content.2.ul.2': 'Si la detection ne fonctionne pas, plus d\'instructions s\'afficherons.',
	'howToUse.content.3.1': 'Sélectionner le(s) fichier(s) à dé-/encrypter',
	'howToUse.content.3.2': 'Vous pouvez choisir plusieurs fichiers!',
	'howToUse.content.4': 'Appuyez sur le button de décryption ou d\'encryptions.',
	'howToUse.content.5.1': 'Vous pouvez visualizer les fichiers décrypter en cliquant sur "{0}", a côté du nom du fichier.', // 0 => View Button Name
	'howToUse.content.5.2': 'Bien évidement, vous pouvez visualizer les fichiers encryptés',
	'howToUse.content.6': 'Vous pouvez les sauvegarder en cliquant sur "{0}". (Le script gardera le nom du fichier et son extension!) =)', // 0 => Save Button Name
	'howToUse.content.6.ul.1': 'Vous pouvez également tous les sauvegarder en un fichier ZIP avec le button "{0}"!', // 0 => Save all as Zip Button-Name

	// == Content: Credits ==
	'credits.anonymous': 'Anonyme',
	'credits.anonymous.explanation': 'Cette personne souhaite rester anonyme, mais cela appartiendra quand même a eux',
	'credits.forProject': 'Pour avoir crée ce projet',
	'credits.forLib': 'Pour la librairie {0}', // 0 => Lib-Name
	'credits.betterInterface': 'Pour l\'interface utilisateur',
	'credits.noKey': 'Pour aider pour la décryption sans clef pour les {0}', // 0 => "PNGs"
	'credits.chrome.viewFile': 'Pour aider a réparer un bug avec la visualization des fichiers sur Chrome',
	'credits.icon': 'Icon',    // /////
	'credits.icons': 'Icons',  // <-- Translating these would make no sense in French due to how its setup within the code
	'credits.lock': 'Lock',    // /////
	'credits.unknownAuthor': '{0}, je ne trouve plus la source pour t\'ajouter!', // 0 => E-Mail-Link
	'credits.emailLink': 'Envoie-moi un E-Mail',

	// == Content: Tooltips ==
	'tooltip.content.infoZipDownload': 'Il y a une limitation, dépendant de votre mémoire et de votre navigateur... Pour gérer plusieurs fichiers ({0}), préférez le décrypteur rédigé en Java!', // 0 => "500+mb"
	'tooltip.content.infoClearFiles': 'Supprime tout les fichiers de la liste ci-dessous',
	'tooltip.content.viewEncryptedFileInfo': 'Ce fichier est encrypté et ne peut être visualizer dans le navigateur. Vous pouvez le sauvegarder et le mettre dans le jeu (images traduites par example).',
	'tooltip.content.gameDir': 'Dossier du Jeu',
	'tooltip.content.summary': 'Résumé',
	'enDecrypt.tooltip.content.headerInfo': 'Paramètres Avancés! Généralement, vous n\'avez pas besoin de toucher ces paramètres! (Seulement dans des cas RARES)',
	'enDecrypt.tooltip.content.verifyHeader.help.1': 'Ceci vérifie si l\'en-tête est correcte (au debut du fichier).',
	'enDecrypt.tooltip.content.verifyHeader.help.2': 'L\'en-tête est important pour l\'encryptions (la décryptions peut l\'ignorer).',
	'enDecrypt.tooltip.content.verifyHeader.help.3': 'Dans des cases {0}, certains jeux utilise des en-têtes différentes. Vous pouvez trouver leur paramètres correspondantes dans:', // 0 => "very rare" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.help.3.rare': 'très rares',
	'enDecrypt.tooltip.content.verifyHeader.help.4': 'Cherchez la fonction "{0};" Vous y trouverez toutes les valeurs.', // 0 => "function Decrypter()"
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1': 'Ignore l\'en-tête du fichier',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1.warning': 'Attention',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.2': 'Cela peut causer des fichiers décryptés invalides! (Il va décrypter même s\'il N\'ÉTAIT PAS encrypté et par conséquent rendre le fichier inutile.)',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.3': 'Ne l\'utilisez seulement si vous êtes sûre que ce dernier a été encrypté par RPG Maker!', // 0 => No-Button Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.1': 'Généralement vous n\'avez pas besoin de l\'en-tête pour la décryption.',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.2': 'Il est juste ignoré',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.3': 'Il permet juste de s\'assurer qu\'il a été encrypté par RPG Maker ^^',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary': 'Vous {0} décrypter tout fichier RPG Maker sans connaître leur paramètres.', // 0 => "CAN" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.can': 'POUVEZ',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.2': 'Changez juste en "Ne pas verifier" s\'il ne peut pas le vérifier pour vous =)',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.3': 'Ça marchera généralement avec les paramètres par défaut.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.1': 'Si vous voulez remettre le fichier dans le jeu, vous AVEZ BESOIN de l\'en-tête. Le jeu vérifie si l\'en-tête est correcte.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.2': 'Si ce dernier ne l\'est pas, le jeu ne l\'affichera pas...',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3': 'Vous {0} de l\'en-tête. Si ce dernier ne l\'est pas, le jeu ne l\'affichera pas.', // 0 => "NEED" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3.need': 'AVEZ BESOIN',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.4': 'Les paramètres par défaut marchera dans {0} jeux sur {1}.', // 0 => "99", 1 => "100"
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.5': 'Donc essayez les valeurs par défaut d\'abord et si cela marche pas, alors vous pouvez chercher pour les bons paramètres de l\'en-tête.',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.6': 'Vous pouvez les trouver ici:',

	// Titles (Mouseover hints)
	'title.projectIcon': 'Déverrouiller ou Reverrouiller les fichiers RPG Maker MV',
	'title.dragAndDrop': 'Glisser-Déposer les fichiers ici, ou sélectionnez-les',
	'title.viewInBrowser': 'Visualizer le fichier dans votre navigateur',
	'title.save': 'Sauvegarder le fichier sur votre ordinateur',
	'languages.title.selectDifferentLang': 'Choisir une langue différente',
	'info.title.seeReleases': 'Voir l\'alpha sur GitLab',
	'info.title.seeProject': 'Visiter le projet sur GitLab',
	'browserSupport.title.reportBugs': 'Aidez-moi en reportant les bugs',

	// Footer
	'footer.createdBy': 'Script crée par {0}', // 0 => "Petschko"-Link
	'footer.creator.title': 'Envoyez-moi un email si vous avez des questions/problèmes',
	'footer.visitRepo': 'Visiter le dépôt sur GitLab',
	'footer.visitRepo.title': 'Visiter le projet sur GitLab',
	'footer.reportBugs': 'Envoyez vos reports de bug ici',
	'footer.reportBugs.title': 'Envoyez vos reports de bug si vous en avez =) (Ou envoyez-moi un email.)',
	'footer.translatedBy': 'Traduction française par {0}', // 0 => Translator name(s) and link(s) if given
	'footer.translatedByLinkTitle': 'Visitez les sites des traducteurs',
	'footer.translateHelp': 'Soumettez une traduction ou corrigez des fautes d\'orthographes ici',

} // Ignore this line
