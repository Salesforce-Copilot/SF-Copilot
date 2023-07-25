({
	getWords : function(count) {
		if(count>100) return;
        // Build Array
        let WordsArray = ["a","about","all","also","and","as","at","be","because","but","by","can","come","could","day","do","even",
                          "find","first","for","from","get","give","go","have","he","her","here","him","his","how","I","if","in","into",
                          "it","its","just","know","like","look","make","man","many","me","more","my","new","no","not","now","of",
                          "on","one","only","or","other","our","out","people","say","see","she","so","some","take","tell","than","that",
                          "the","thei","the","their","there","these","they","thing","think","thism","those","time","to","two","up","use",
                          "very","want","way","we","well","what","when","which","who","will","with","would","year","you","your"];
        //Randomize the words array
        WordsArray=this.randomizeArray(WordsArray);
       //return requested words
      return  WordsArray.slice(0,count);
	},
    
    randomizeArray : function(arr){
			const randomArr = arr;
			//Randomize the array
				for(let i=randomArr.length -1 ; i>0; i--){
					const j = Math.floor(Math.random()*i);
					const temp = randomArr[i];
					randomArr[i] = randomArr[j];
					randomArr[j]=temp;
			}
					return randomArr;
},
    
    getWinWord : function(arr){
			const randomIndex = Math.floor(Math.random()*arr.length);
        	return arr[randomIndex];
},
    disableBoard : function(component){
    component.set("boardDisabled",true);
},
    
      enableBoard : function(component){
    component.set("boardDisabled",false);
      },
    
})