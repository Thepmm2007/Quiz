class Question {
    constructor() {
     this.input1 = createInput("Name");
     this.input2 = createInput("Correct Option");
     this.button = createButton('Submit');
     this.greeting = createElement('h2');
    }

    display(){
      var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(350, 0);
      
        var question = createElement('h3')
        question.html("Question:- What starts and ends with the letter E but, has only one letter ? ");
        question.position(150,80);
        var option1 = createElement('h4')
        option1.html("1. Everyone ");
        option1.position(150,100);
        var option2 = createElement('h4')
        option2.html("2. Envelope ");
        option2.position(150,120);

        //var input = createElement('h3')
        this.input1.position(150,230);
        this.input2.position(150,260);
        this.button.position(350,260);

        this.button.mousePressed(()=>{
          this.input1.hide();
          this.input2.hide();
          this.button.hide();
          contestant.name = this.input1.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
        });
      }
} 