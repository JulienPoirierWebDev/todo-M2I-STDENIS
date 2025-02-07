function transformInKebabCase(str) {
	return str
		.toLowerCase()
		.replace(/([A-Z])/g, (match) => ` ${match.toUpperCase()} `)
		.replaceAll(' ', '-');
}

export default transformInKebabCase;
