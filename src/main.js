// biomeのformatとlintを試すためのJavaScriptのサンプルコード

const mainJavaScript = () => {
	function helloWorld(name) {
		if (!name) {
			console.error("名前が指定されていません。");
			return;
		}
		console.log("こんにちは、" + name + "さん！");
	}

	helloWorld("Alice");
};

mainJavaScript();
