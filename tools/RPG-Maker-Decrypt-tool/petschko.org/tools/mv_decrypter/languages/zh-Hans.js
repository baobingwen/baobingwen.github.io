var lang_zh_hans = { // Ignore this line

	// ===== 基本数据 - 请填写这些 =====
	'languageName': 'Chinese (Simplified)', // 语言的英文名称[别写中文有BUG]
	'localizedLanguageName': '简体中文', // 语言的本地名称
	'flagAltText': 'China Flag', // 如果无法显示语言的国旗图标，则显示的文本
	'htmlLang': 'zh-Hans', // Keep empty if unsure

	// 在这里添加所有翻译作者
	'translatedBy': [
		{
			'name': 'diffghjkl', // 添加你的名字或删除整个{}块
			'url': 'https://blog.dmoe.top/', // 添加你的个人网站或留空
		},
		{
			'name': '宅宅的妙妙屋-一只废阿宅!', // 添加你的名字或删除整个{}块
			'url': 'https://www.justnainai.com/', // 添加你的个人网站或留空
		}
	],
	// ========== 配置完成 =========

	// 图片替代名称(当图片无法加载时显示)
	'images.alt.ukFlag': 'UK Flag',
	'images.alt.deFlag': 'German Flag',
	'images.alt.chFlag': 'Chinese Flag',
	'images.alt.projectIcon': '项目图标(带钥匙的箱子)',
	'images.alt.brokenLock': '(解密图片)',
	'images.alt.lock': '(加密图片)',
	'images.alt.validCss': 'CSS有效!',

	// Meta-Information
	'title': 'Petschko 的 RPG Maker MV & MZ 文件解密工具',

	// Header Information
	'header.language': '语言',
	'header.title': 'Petschko 的 RPG Maker MV & MZ 文件解密工具',

	// Nav-Tab Items
	'tab.home': '主页',
	'tab.enDecrypt': '加密&解密',
	'tab.restoreImages': '恢复图像(无密钥)',
	'tab.browserSupport': '浏览器支持',
	'tab.howToUse': '使用方法',
	'tab.credits': '鸣谢',
	'tab.about': '关于',

	// 标题
	'h.fileList': '文件列表',
	'enDecrypt.h.selectFilesAndInfo': '选择文件和信息',
	'enDecrypt.h.headerInfo': '标题信息',
	'restore.h.selectFiles': '选择 RPGMVP / PNG_ 文件',
	'browserSupport.h': '浏览器支持',
	'howToUse.h': '如何使用？',
	'credits.h': '鸣谢',
	'credits.h.code': '代码鸣谢',
	'credits.h.image': '图片鸣谢',

	// 表单框标题
	'enDecrypt.formBox.decryptCode': '解密密钥',
	'enDecrypt.formBox.advanced': '高级',
	'formBox.selectFiles': '选择文件',
	'formBox.fileList': '下载文件',

	// 按钮和 UI 元素
	'tooltip.i': 'i', // Tooltip-Element (i) - 信息元素
	'tooltip.question': '?', // Tooltip-Element (?) - 帮助元素
	'tooltip.details': '详细信息', // Tooltip-Element (details) - 详细信息元素
	'files.dragAndDrop': '(或) 将文件拖放到这里。',
	'button.view': '预览',
	'button.save': '保存',
	'button.saveAllAsZip': '保存所有为 ZIP 文件',
	'button.clearFiles': '清空文件列表',
	'button.gotoRestorePage': '请访问这里以无密钥恢复图像',
	'home.button.restoreImages': '(无密钥) 从游戏中恢复图像',
	'home.button.enDecryptImages': '加密/解密 游戏文件',
	'enDecrypt.label.decryptCodeFile': '选择一个 {0} 或 "{1}"/"{2}" 文件并点击 {3}!', // 0 => "System(.json)", 1 => ".rpgmvp", 2 => ".png_", 3 => Detect-Button-Text
	'enDecrypt.label.decryptCode': '加密/解密代码',
	'enDecrypt.label.files': '加密/解密文件',
	'enDecrypt.label.verifyHeader': '验证虚假标题？',
	'enDecrypt.label.verifyHeader.yes': '是',
	'enDecrypt.label.verifyHeader.no': '否(忽略)',
	'enDecrypt.label.no': '否',
	'enDecrypt.label.header.length': '标题长度 {0}', // 0 => In Bytes Text (Italic)
	'enDecrypt.label.header.length.byteNote': '(以字节为单位)',
	'enDecrypt.label.header.signature': '标题签名',
	'enDecrypt.label.header.version': '标题版本',
	'enDecrypt.label.header.remain': '标题剩余部分',
	'enDecrypt.button.detect': '检测',
	'enDecrypt.button.headerValues.show': '标题值 ({0})', // 0 => 显示或隐藏(接下来的两行)
	'enDecrypt.button.headerValues.show.show': '显示',
	'enDecrypt.button.headerValues.show.hide': '隐藏',
	'enDecrypt.button.resetHeaderVal': '重置标题值为默认',
	'enDecrypt.button.decrypt': '解密',
	'enDecrypt.button.mv.encrypt': '(重新) 加密 MV',
	'enDecrypt.button.mz.encrypt': '(重新) 加密 MZ',
	'restore.label.files': '选择要恢复的文件',
	'restore.button.restoreOriginalImages': '恢复原始图像',

	// 错误/警告/信息消息
	'exception.errorCode': '错误代码',
	'exception.emptyFile': '文件为空，或浏览器无法读取...',
	'exception.invalidFakeHeader.1': '虚假标题与模板虚假标题不匹配。',
	'exception.invalidFakeHeader.2': '请确保你使用的是加密文件。如果是，请关闭“虚假标题”并重试。',
	'exception.reportBug': '请报告此错误',
	'exception.helper.invalidByte': '字节值无效 ({0})', // 0 => 字节值
	'error': '错误',
	'error.detect.noFile': '请选择 {0} 文件或任何加密图像 ({1} 文件)!', // 0 => "System(.json)", 1 => ".rpgmvp / .png_"
	'error.detect.invalidJsonFile': '错误：文件内容无效!(可能不是 JSON 或 加密图像 文件) - 仅支持 {0} 格式的文件!', // 0 => ".json/.rpgmvp/.png_"
	'error.detect.keyNotFound.1': '错误：未找到密钥——请确保选择了正确的文件!',
	'error.detect.keyNotFound.2': '您还可以使用加密图像({0})来检测密钥!', // 0 => ".rpgmvp / .png_"
	'error.detect.keyNotFound.3': '在极少数情况下，密钥在游戏中被隐藏/混淆。请尝试以下步骤：',
	'error.detect.keyNotFound.3.1': '1.打开下方链接并复制代码',
	'error.detect.keyNotFound.3.2': '2.将代码粘贴到此文件的最后一行：{0}', // 0 => "./www/js/rpg_core(.js)"
	'error.detect.keyNotFound.3.3': '3.保存文件',
	'error.detect.keyNotFound.3.4': '4.运行游戏并复制代码',
	'error.restore.noFileSelected': '请至少选择一个要恢复的文件...',
	'error.enDecrypt.noCode': '请输入密钥!',
	'error.enDecrypt.invalidCode': '加密/解密代码只能包含 HEX 字符 ({0})!', // 0 => "0-9 & A-F & a-f"
	'error.enDecrypt.noFileSelected': '请至少选择一个要解密/加密的文件...',
	'error.zip.emptyZip': '无法提供 ZIP 下载!ZIP 文件为空...',
	'info.detect.keyFound': '找到密钥 ^^! ({0})', // 0 => 加密密钥
	'warn.enDecrypt.header.invalidLength': '信息：标题长度必须是正的整数!(现在使用默认值：{0})', // 0 => 默认标题长度值
	'warn.enDecrypt.header.invalidSignature': '信息：标题签名只能包含 HEX 字符 ({0})!(现在使用默认值：{1})', // 0 => "0-9 & A-F & a-f", 1 => 默认标题签名
	'warn.enDecrypt.header.invalidVersion': '信息：标题版本只能包含 HEX 字符 ({0})!(现在使用默认值：{1})', // 0 => "0-9 & A-F & a-f", 1 => 默认标题版本
	'warn.enDecrypt.header.invalidRemain': '信息：标题剩余部分只能包含 HEX 字符 ({0})!(现在使用默认值：{1})', // 0 => "0-9 & A-F & a-f", 1 => 默认标题剩余部分
	'confirm.resetHeaderValues': '你确定要将标题值重置为默认值吗？',

	// == 内容: 隐藏信息 ==
	'info.information.1': '信息',
	'info.information.2': '我的项目 “{1}” {0} , 它可以处理整个目录并自行保存/重命名文件...', // 0 => "发布了 Alpha 版本"-发布链接, 1 => "Java-RPG-Maker-MV-Decrypter"-项目链接
	'info.information.2.releaseLink': '发布了一个 Alpha版本',
	'info.information.2.projectLink': 'Java-RPG-Maker-MV-Decrypter',
	'info.information.3': '它有一个图形界面，试试看!如果你只是想解密单个文件，我推荐你使用这个版本。{0}。对于整个目录，你应该尝试 Java 版本的解密工具!=)', // 0 => 无下载参数
	'info.information.3.noDownload': '因为你不需要下载它',

	// == 内容: 首页 ==
	'home.content.welcome.1': '欢迎使用 RPG-Maker MV & MZ 文件解密工具。你可以轻松解密任何 RPG-MV/RPG-MZ 项目中的文件，这些文件使用内置加密进行加密。你还可以重新加密这些文件(主要用于翻译目的)。',
	'home.content.welcome.2': '确保你不要使用这个工具来盗取资产。如果你只是想查看图像(大多数法律允许私人使用)，可以随意查看，但请不要偷取。',
	'home.content.whatToDoSelection': '请选择你想做的操作',

	// == 内容: 加密 & 解密 ==
	'enDecrypt.content.1': 'PNG 文件(图像 - "{0} 文件")不需要解密代码，{1} 你想重新加密它们。', // 0 => ".rpgmvp & .png_", 1 => "除了"(加粗文本)
	'enDecrypt.content.2': '在这里你可以解密和(重新)加密 RPG-Maker MV & MZ 游戏的文件。',
	'enDecrypt.content.3': '你可以从文件中获取解密代码',
	'enDecrypt.content.3.mv': 'RPG-Maker MV',
	'enDecrypt.content.3.mz': 'RPG-Maker MZ',
	'enDecrypt.content.3.text': '"游戏目录"{0} 或任何加密图像 ("{1}" 文件)', // 0 => path to system.json, 1 => 文件扩展名
	'enDecrypt.content.4': '选择 {1} 文件后点击 "{0}"。如果你知道密钥，你也可以直接在文本框中输入它。', // 0 => Detect-Button-Text, 1 => "System(.json)"
	'enDecrypt.content.header.info': '何时需要更改这些设置？',
	'enDecrypt.content.header.decryption': '解密',
	'enDecrypt.content.header.encryption': '加密',

	// == 内容: 恢复 ==
	'restoreImages.content': '在这里，您可以直接将 RPG-Maker游戏 中 加密的图像文件(一般为 {1} 格式) 转换为 {0} 格式，无需密钥', // 0 => "PNG", 1 => ".rpgmvp & .png_"

	// == 内容: 浏览器支持 ==
	'browserSupport.note': '请注意，这个脚本仅在 {0} 上进行测试和开发。你可以通过 {1} 帮助我使它在所有浏览器上运行!', // 0 => "Firefox", 1 => 报告错误链接
	'browserSupport.note.reportBugsLink': '报告错误',
	'browserSupport.note.first': '首先',
	'browserSupport.unknown': '未知',
	'browserSupport.unusable': '无法使用',
	'browserSupport.partialUsable': '部分可用',
	'browserSupport.almostCompleteUsable': '几乎完全可用',
	'browserSupport.usable': '可用',
	'browserSupport.outOfSupport': '不支持',
	'browserSupport.feature.downloadFiles': '下载文件',
	'browserSupport.feature.viewFiles': '查看文件',
	'browserSupport.feature.enDecrypt': '加密/解密',
	'browserSupport.feature.zipDownload': 'ZIP 下载',
	'browserSupport.browser.ie': 'Internet Explorer',
	'browserSupport.browser.edge': 'Edge',
	'browserSupport.browser.chrome': 'Google Chrome',
	'browserSupport.browser.firefox': 'Firefox',
	'browserSupport.browser.safari': 'Safari',
	'browserSupport.browser.opera': 'Opera',

	// == 内容: 如何使用 ==
	'howToUse.content.or': '或',
	'howToUse.content.new': '新',
	'howToUse.content.except': '除了',
	'howToUse.content.1.1': '检查加密文件是否具有文件扩展名 {0} - 如果它们具有这些扩展名，那么你可以使用这个脚本。', // 0 => 所有有效文件扩展名
	'howToUse.content.1.2': '如果你想加密文件，它们通常具有类似 "{0}" 的文件扩展名 =)', // 0 => ".png"
	'howToUse.content.2.1': '获取加密/解密代码。',
	'howToUse.content.2.2': '{0} 文件(图像 - "{1} 文件")不需要解密代码，{2} 你想重新加密它们。', // 0 => "PNG", 1 => ".rpgmvp & .png_", 2 => "除了"
	'howToUse.content.2.ul.1': '上传游戏的 {0} 文件后，点击“{1}”运行检测代码', // 0 => "System(.json)", 1 => Detect-Button-Text
	'howToUse.content.2.ul.2': '如果检测不起作用，则会弹出进一步的说明',
	'howToUse.content.3.1': '选择要解密/加密的文件',
	'howToUse.content.3.2': '可同时选择多个文件!',
	'howToUse.content.4': '点击解密或加密按钮。',
	'howToUse.content.5.1': '如果您点击文件名旁边的“{0}”，则可以预览解密的文件。', // 0 => 预览按钮名称
	'howToUse.content.5.2': '当然，你不能预览加密的文件',
	'howToUse.content.6': '点击 "{0}" 以保存它们。(脚本将保留文件名并为你更改扩展名!) =)', // 0 => 保存按钮名称
	'howToUse.content.6.ul.1': '你还可以通过点击 "{0}" 将文件列表中的所有文件保存为 ZIP!', // 0 => 保存所有为 ZIP 按钮名称

	// == 内容: 贡献者 ==
	'credits.anonymous': '匿名',
	'credits.anonymous.explanation': '该用户希望保持匿名，但这是属于他的',
	'credits.forProject': '感谢创建这个项目',
	'credits.forLib': '感谢 {0} 库', // 0 => 库名称
	'credits.betterInterface': '感谢提供更友好的界面',
	'credits.noKey': '对于 {0} 的无密钥“解密”的提示', // 0 => "PNGs"
	'credits.chrome.viewFile': '帮助解决在 Google Chrome 浏览器的 "预览文件" Bug',
	'credits.icon': '图标',
	'credits.icons': '图标',
	'credits.lock': '锁定',
	'credits.unknownAuthor': '如果你是这个图标的作者，请联系{0}，我无法找到源头来为你添加鸣谢!!', // 0 => 电子邮件链接
	'credits.emailLink': '给我发邮件',

	// == 内容: 工具提示 ==
	'tooltip.content.infoZipDownload': '根据你的内存和浏览器，存在大小限制... 要处理大量文件 ({0})，你应该使用 Java 解密工具!', // 0 => "500+mb"
	'tooltip.content.infoClearFiles': '从下方列表中删除所有文件',
	'tooltip.content.viewEncryptedFileInfo': '该文件已加密，您无法在浏览器中查看它。您可以保存它并将其放入游戏中。(例如翻译的图像)',
	'tooltip.content.gameDir': '游戏目录',
	'tooltip.content.summary': '概括',
	'enDecrypt.tooltip.content.headerInfo': '专家设置!通常你不需要在这里更改任何内容!(仅在非常少见的情况下)',
	'enDecrypt.tooltip.content.verifyHeader.help.1': '这会检查文件头是否正确(文件开头)。',
	'enDecrypt.tooltip.content.verifyHeader.help.2': '头部只对加密重要(解密可以忽略它)。',
	'enDecrypt.tooltip.content.verifyHeader.help.3': '在 {0} 情况下，某些游戏会使用不同的标头设置。您可以在以下位置找到正确的标头设置：', // 0 => "非常少见" - 加粗文本
	'enDecrypt.tooltip.content.verifyHeader.help.3.rare': '非常少见',
	'enDecrypt.tooltip.content.verifyHeader.help.4': '搜索 “{0}”, 您可以找到所有值', // 0 => "function Decrypter()"
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1': '忽略文件头',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1.warning': '警告',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.2': '可能导致无效的解密文件!(即使文件没有加密，也会解密。它将使文件无法使用。)',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.3': '只有在你确定文件是 RPG Maker 加密的情况下才使用 "{0}"', // 0 => 否按钮文本
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.1': '通常，你不需要头部进行解密。',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.2': '它会被丢弃',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.3': '它只是用来确保您的文件是一个 RPG-Maker 加密的文件 ^^',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary': '你 {0} 解密任何 RPG 文件，而无需知道正确的设置。', // 0 => "可以" - 加粗文本
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.can': '可以',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.2': '如果它无法验证头部，你可以将其更改为 "不要验证" =)',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.3': '通常使用默认设置会正常工作。',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.1': '如果你想将文件放回游戏中，你需要头部。游戏会检查头部是否正确。',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.2': '若文件头错误，游戏将无法正确显示',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3': '您 {0} 确保文件头正确，若文件头错误，游戏将无法正确显示', // 0 => "需要" - 加粗文本
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3.need': '需要',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.4': '通常，默认设置会对 {0} 的 {1} 游戏有效。', // 0 => "99", 1 => "100"
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.5': '所以，请先尝试默认设置。如果不起作用，你可以搜索正确的头部设置。',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.6': '您可以在这里找到它们：',

	// 标题(鼠标悬停提示)
	'title.projectIcon': '解锁或重新锁定 RPG Maker MV 文件',
	'title.dragAndDrop': '将文件拖放到此处或选择文件',
	'title.viewInBrowser': '在浏览器中查看文件',
	'title.save': '将文件保存到你的计算机上',
	'languages.title.selectDifferentLang': '选择不同的语言',
	'info.title.seeReleases': '查看 GitLab 上的 alpha 版本',
	'info.title.seeProject': '访问 GitLab 上的项目',
	'browserSupport.title.reportBugs': '通过报告错误来帮助我',

	// 页脚
	'footer.createdBy': '脚本由 {0} 创建', // 0 => "Petschko"-链接
	'footer.creator.title': '如果你有问题/问题，请给我发邮件',
	'footer.visitRepo': '访问 GitLab 上的仓库',
	'footer.visitRepo.title': '在 GitLab 上访问此项目',
	'footer.reportBugs': '请在这里报告错误',
	'footer.reportBugs.title': '如果发现错误，请报告 =) (也可以向我发送电子邮件)',
	'footer.translatedBy': '中文翻译由 {0}', // 0 => 翻译者名称和链接(如果有)
	'footer.translatedByLinkTitle': '访问翻译者的网站',
	'footer.translateHelp': '在此提交翻译或修正拼写错误',

} // Ignore this line
