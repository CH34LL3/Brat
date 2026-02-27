#!/usr/bin/env node
const arg = require('arg');
const fs = require('node:fs')
const path = require('node:path')
const readline = require('node:readline')




const args = arg({

	'--sup': Boolean,
	'--build': Boolean,
	'--huh': Boolean,
	'--patt': String,
	'--remb': String,
	'--hate': String,
	'--GMYP': Boolean,
	'--h': '--huh'
});


if (args['--sup']) {
	console.log("get out of my folder")


}

if (args['--huh']) {
	console.log(`Commands: \n --huh : Show all commands \n --sup : Kinda does nothing lowk \n --patt : changes the CWF \n --remb : Add project location to memory \n --hate : remove a project from memory \n --GMYP : Makes her spill her guts`)
}
if (args['--patt']) {
	try {
		if (args['--patt'].includes('\\')) {
			console.log("ugh, this is boring")
			const storage = path.join(__dirname, 'storage.json')
			const d = JSON.parse(fs.readFileSync(storage, 'utf8'))
			d.cwf = args['--patt']
			fs.writeFileSync(storage, JSON.stringify(d))
		}
		else {
			const storage = path.join(__dirname, 'storage.json')
			const d = JSON.parse(fs.readFileSync(storage, 'utf8'))

			if (d.projects[args['--patt']]) {
				d.cwf = d.projects[args['--patt']]
				console.log(`Yes yes, \n You're now in Project: ${d.cwf} \n Leave me alone`)
				fs.writeFileSync(storage, JSON.stringify(d))

			}
			else { console.log("Someone has dementia already. . .") }

		}
	}
	catch (error) {
		console.log("You are really wasting my time here.", error)
	}
}

if (args['--hate']) {
	const storage = path.join(__dirname, 'storage.json')
	const d = JSON.parse(fs.readFileSync(storage, 'utf8'))

	if (d.projects[args['--hate']]) {
		delete d.projects[args['--hate']]
		console.log("Finally! Sorry, I didn't want to tell you how ugly that thing was...")
		fs.writeFileSync(storage, JSON.stringify(d))
	}
	else { console.log("You're fighting ghost lil bro") }
}
if (args['--remb']) {
	const storage = path.join(__dirname, 'storage.json')
	const d = JSON.parse(fs.readFileSync(storage, 'utf8'))

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});


	rl.question(`I should charge a fee for this. Whatever, what do I call it?: `, name => {
		d.projects[name] = args['--remb'];

		console.log(d.projects)
		fs.writeFileSync(storage, JSON.stringify(d))
		rl.close()
	})

}
if (args['--build']) {
	try {
		console.log("ughhhhhhh")
		const storage = path.join(__dirname, 'storage.json')
		const d = JSON.parse(fs.readFileSync(storage, 'utf8'))
		require(path.resolve(d.cwf))
		console.log("Wait, maybe you're not that much of a loser. . .")

	}
	catch (error) { console.log(`You're so fucking stupid lmfao \n ${error}`) }
}

if (args['--GMYP']) {
	const storage = path.join(__dirname, 'storage.json')
	const d = JSON.parse(fs.readFileSync(storage, 'utf8'))
	console.log(`GEE! Ever heard of , i dunno, PRIVACY??`)
	console.dir(d)

}
