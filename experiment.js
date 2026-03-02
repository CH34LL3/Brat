const ax = require('axios')
const cho = require('cheerio');


// function get_News() {
ax({
    method: 'get',
    url: 'https://www.channelstv.com',
})
    .then(function(response) {
        const $ = cho.load(response.data)
        const $selected = $('div.leading-article:first').find('h3');
        console.log(`Channels: ${$selected.text().trim()}`)
    });

ax({
    method: 'get',
    url: 'https://businessday.ng',
})
    .then(function(response) {
        const $ = cho.load(response.data)
        const $selected = $('article:first').find('h2');
        console.log(`BusinessDay: ${$selected.text().trim()}`)
    });








