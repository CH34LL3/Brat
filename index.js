#!/usr/bin/env node
const arg = require('arg');
const fs = require('node:fs')
const path = require('node:path')
const readline= require('node:readline')




const args = arg({
	
	'--start': Boolean,
	'--build': Boolean,
	'--patt': String,
	'--remb': String,
	'--hate': String,
	'--GMYP': Boolean,
});


if (args['--start']){
	console.log("Heyyyy~")
	
}
 if (args['--patt']){
 
	if (args['--patt'].includes('\\')){
		console.log("ugh, this is boring")
		const storage = path.join(__dirname, 'storage.json')
		const d =  JSON.parse(fs.readFileSync(storage,'utf8'))
		d.cwd = args['--patt']
		fs.writeFileSync(storage,JSON.stringify(d))
	}
	else{
		const storage = path.join(__dirname, 'storage.json')
		const d =  JSON.parse(fs.readFileSync(storage,'utf8'))
		
		if (d.projects[args['--patt']]){
			d.cwd = d.projects[args['--patt']]
			console.log(`See, I told you I was listening! \n You're now in Project:${d.cwd} | >:3`)
			fs.writeFileSync(storage,JSON.stringify(d))
			
		}
		else {console.log("Someone has dementia already. . .")}
		
	}
}

if (args['--hate']){
	const storage = path.join(__dirname, 'storage.json')
	const d =  JSON.parse(fs.readFileSync(storage,'utf8'))
	
	if(d.projects[args['--hate']]){
		delete d.projects[args['--hate']]
		console.log("I kinda liked that one...")
		fs.writeFileSync(storage,JSON.stringify(d))
	}
	else{console.log("You're fighting ghost darling")}
}
 if (args['--remb']){
	const storage = path.join(__dirname, 'storage.json')
	const d =  JSON.parse(fs.readFileSync(storage,'utf8'))
	
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	});

	
	rl.question(`HUH? oh yeah, I was TOTALLY listening. . . what'd you call it again? haha: `, name => {
	d.projects[name] = args['--remb']; 
	
	console.log(d.projects)
	fs.writeFileSync(storage, JSON.stringify(d))
	rl.close()
	})

}
if (args['--build']) {
	try{
	console.log("wait it's giving! This my fav part")
	const storage = path.join(__dirname, 'storage.json')
	const d =  JSON.parse(fs.readFileSync(storage,'utf8'))
	require(path.resolve(d.cwd))
	}
	catch (error){console.log("HAHA! That's not a not a JS file stupid!")}
}



if (args['--GMYP']){
	const storage = path.join(__dirname, 'storage.json')
	const d = JSON.parse(fs.readFileSync(storage,'utf8'))
	console.log(`Gosh, you're so controlling! Here you go dickwad`)
	console.dir(d)
	
}
// D:\Desktop\Science-y shit\NL Coding\Matrix Mulitplier\Square Matrix Multiplier\Matrix Multiplier.js