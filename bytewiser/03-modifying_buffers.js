var stream = process.stdin;

process.stdin.on("data", (content) => {
	for (var i = 0; i < content.length; i++) {
		if(content[i] == 46) {
			content.write('!', i);
		}
	};
  console.log(content);
});
