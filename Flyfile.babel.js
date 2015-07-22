export default function*() {
	yield this
		.source('secret')
		.target('backup')
}
