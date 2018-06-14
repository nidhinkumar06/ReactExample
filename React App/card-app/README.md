About App:
==========


Installation:
===============
npm install --save firebase

To Know About:
===============
1.What is Constructor
2.Why Constructor is used in Component
3.Does Constructor will be used in class Component or in functional Component
4.LifeCycle Methods of React
5.What is ComponentWillMount


Error:
========

1.TypeError: Cannot read property 'eng' of undefined

Error Console:
========
App.render
src/App.js:54
  51 | render() {
  52 |   return (
  53 |     <div className="App">
> 54 |        <Card eng={this.state.currentCard.eng}
  55 |              han={this.state.currentCard.han}
  56 |              pin={this.state.currentCard.pin}
  57 |            />
View compiled

cause:
=========

componentWillMount(){
  const currentCards = this.state.cards;
  this.database.on('child_added', snap => {
    currentCards.push({
      id: snap.key,
      eng: snap.val().eng,
      han: snap.val().han,
      pin: snap.val().pin
    })
  })

  this.setState({
    cards: currentCards,
    currentCard: this.getRandomCard(currentCards)
  })
}

Solution:
==========
Since we are using firebase and when the vaues which we got from firebase are pushed to currentCards and the setState is defined after the database cause the issue to recetify it we need to add the code as follows

componentWillMount(){
  const currentCards = this.state.cards;
  this.database.on('child_added', snap => {
    currentCards.push({
      id: snap.key,
      eng: snap.val().eng,
      han: snap.val().han,
      pin: snap.val().pin
    })
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  })
}
