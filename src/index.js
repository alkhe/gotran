import got from 'got'
import loose from 'loose-json'

let [in_lang, out_lang, ...text] = process.argv.slice(2)

text = text.join(' ')

got(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${ in_lang }&tl=${ out_lang }&dt=t&q=${ encodeURIComponent(text) }`)
	.then(result => {
		console.log(loose(result.body)[0][0][0])
	})
	.catch(err => {
		console.log(err.response.body)
	})
