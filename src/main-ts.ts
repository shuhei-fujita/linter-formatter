// biomeのformatとlintを試すためのTypeScriptのサンプルコード

const mainTypeScript = () => {
	interface User {
		name: string;
	}

	function helloWorld(user: User) {
		if (!user.name) {
			console.error("名前が指定されていません。");
			return;
		}
		console.log("こんにちは、" + user.name + "さん！");
	}

	helloWorld({ name: "biome" });
};

mainTypeScript();
