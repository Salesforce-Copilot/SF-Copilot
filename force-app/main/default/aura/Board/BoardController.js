({
	doInit : function(component, event, helper) {
		console.log("Component initialized");
        //biuld a list of 100 words
        //Get mode
        const gameMode = component.get("v.mode");
        let column = 0;
        //get number of columns based on the game mode 
        if(gameMode && gameMode==="hard")
        {
            column=6;
        }else if(gameMode==="medium"){
            column=4;
        }else{
            column=3;
        }
        //Get block/width size
        let blockSize = 12/column;
        component.set("v.blockSize",blockSize);
        //double equals "1"==1 
        //triple equals 1===1
        const words = helper.getWords(column*column);
        component.set("v.words",words);
        console.log('words count - '+ words);
        //get win words
        const winword = helper.getWinWord(words);
        component.set("v.winword",winword);
          console.log('win Words - '+ helper.getWinWord(words));
	},
    
    ReRender : function(component, event, helper) {
		console.log("Component Render");
	},
    BlockClickHandler : function(component, event, helper){
        let clickCount = component.get("v.clickcount")+1;
    //get event value
    const value= event.getParam("value");
        if(value ===component.get("v.winword")){
            //user has won
            component.set("v.result","YOU WIN");
            console.log("You Win");
            helper.disableBoard(component);
        }else if(clickCount ===3 ){
            // user lose
            component.set("v.result","YOU Lose");
            console.log("You Lose");
            helper.disableBoard(component);
        }
        component.set("v.clickcount",clickCount);
        
}
    

})