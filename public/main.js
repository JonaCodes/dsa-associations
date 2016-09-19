const words = new Set(["computer","mango","tree","chair","family","phone","snazzberry","shark"])
const wordMap = new Map()

class Word{
	constructor(keyword){
		this.keyword = keyword
		this.associations = new Map()
	}

	addAssociation (word){
		if(this.associations.has(word)){
			let freq = this.associations.get(word)
			this.associations.set(word,freq + 1)
		}
		else{
			this.associations.set(word, 1)
		}
	}
}

const submitAssociation = (keyword, association) =>{
	if(wordMap.has(keyword)){
		wordMap.get(keyword).addAssociation(association)
	}
	else{
		const word = new Word(keyword)
		word.addAssociation(association)
		wordMap.set(keyword, word)
	}

	words.add(association)
}

const getAssociations = (word) => {
	const associations = wordMap.get(word).associations
	const assArr = Array.from(associations)
	return assArr.sort((a, b) => b[1]-a[1])
}

const getRandomWord = () => Array.from(words)[Math.floor(Math.random() * words.size)]



submitAssociation("tree","leaf")
submitAssociation("tree","banana")
submitAssociation("tree","banana")
submitAssociation("tree","monkey")
submitAssociation("leaf","tree")
submitAssociation("tree","monkey")
submitAssociation("tree","monkey")
submitAssociation("tree","monkey")
submitAssociation("tree","monkey")
submitAssociation("tree","monkey")
submitAssociation("tree","monkey")
submitAssociation("tree","monkey")





/*console.log(getAssociations("tree")*/
console.log(getRandomWord())
console.log(getRandomWord())
console.log(getRandomWord())
console.log(getRandomWord())