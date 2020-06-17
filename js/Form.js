class Form {
  constructor() {
    this.input = createInput("Email");
    this.button1 = createButton("GO");
    this.question1 = createElement("h4");
    this.title1 = createElement("h2");
    this.button2 = createButton("Yes");
    this.button3 = createButton("No");
    this.button4 = createButton("Yes");
    this.button5 = createButton("No");
    this.button6 = createButton("Yes");
    this.button7 = createButton("No");
    this.question2 = createElement("h4");
    this.question3 = createElement("h4");
    this.question4 = createElement("h4");
    this.question5 = createElement("h4");
    this.greeting = createElement("h2");
  }
  hide() {
    this.question1.hide();
    this.button1.hide();
    this.input.hide();
    this.title1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
    this.button7.hide();
    this.question2.hide();
    this.question3.hide();
    this.question4.hide();
    this.question5.hide();
    this.greeting.hide();
  }

  display() {
    this.title1.html("Social Cause");
    this.title1.position(displayWidth / 2 - 50, 0);

    this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
    this.button1.position(displayWidth / 2 + 30, displayWidth / 2);

    this.button1.mousePressed(() => {
      this.input.hide();
      this.button1.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.question1.html("Has the rate of illeterate men and women decreased ??");
      this.question1.position(displayWidth / 2 - 150, displayWidth / 4);

      this.button2.position(displayWidth / 2 - 10, displayWidth / 2);
      this.button3.position(displayWidth / 2 + 50, displayWidth / 2 );
    });
   

    this.button2.mousePressed( () =>{
      this.input.hide();
      this.button1.hide();
      this.question1.hide();
      this.question3.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.question2.html("Has the pecentage of litterate people increased by 50% or more??");
      this.question2.position(displayWidth / 2 - 150, displayWidth / 4);

      this.button4.position(displayWidth / 2 - 10, displayWidth / 2);
      this.button5.position(displayWidth / 2 + 50, displayWidth / 2 );
    });
    this.button3.mousePressed( () =>{
      this.input.hide();
      this.button1.hide();
      this.question1.hide();
      this.question2.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.question3.html("Is it due to lack of knowledge??");
      this.question3.position(displayWidth / 2 - 150, displayWidth / 4);

      this.button4.position(displayWidth / 2 - 10, displayWidth / 2);
      this.button5.position(displayWidth / 2 + 50, displayWidth / 2 );
    });
    this.button4.mousePressed( () =>{
      this.input.hide();
      this.button1.hide();
      this.question1.hide();
      this.question2.hide();
      this.question3.hide();
      this.question5.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.question4.html("Can it be better by awareness??");
      this.question4.position(displayWidth / 2 - 150, displayWidth / 4);

      this.button6.position(displayWidth / 2 - 10, displayWidth / 2);
      this.button7.position(displayWidth / 2 + 50, displayWidth / 2 );
    });
    this.button5.mousePressed( () =>{
      this.input.hide();
      this.button1.hide();
      this.question1.hide();
      this.question2.hide();
      this.question3.hide();
      this.question4.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.question5.html("Is it due to ignorance??");
      this.question5.position(displayWidth / 2 - 150, displayWidth / 4);

      this.button6.position(displayWidth / 2 - 10, displayWidth / 2);
      this.button7.position(displayWidth / 2 + 50, displayWidth / 2 );
    });
    this.button6.mousePressed( () =>{
      this.input.hide();
      this.button1.hide();
      this.question1.hide();
      this.question2.hide();
      this.question3.hide();
      this.question4.hide();
      this.question5.hide();
      this.button2.hide();
      this.button3.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("THANK YOU FOR YOUR RESPONSES");
      this.greeting.position(displayWidth / 2 - 150, displayWidth / 4);
    });
    this.button7.mousePressed( () =>{
      this.input.hide();
      this.button1.hide();
      this.question1.hide();
      this.question2.hide();
      this.question3.hide();
      this.question4.hide();
      this.question5.hide();
      this.button2.hide();
      this.button3.hide();
      player.email = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("THANK YOU FOR YOUR RESPONSES");
      this.greeting.position(displayWidth / 2 - 150, displayWidth / 4);
    });
  }
}
