import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

import images from "./images.json";

class App extends Component {
  state = {
    score: 0, 
    topScore: 0,
    images,
    selectedImages: []
  };

  clickImage = (id) => {
    console.log("click " + id);

    const selectedImages = this.state.selectedImages;    

    if(selectedImages.includes(id) === true){
      console.log("Contain");

      this.setState({
        score: 0,
        selectedImages: []
      });
    }
    else{
      selectedImages.push(id);      

      this.setState({
        score: this.state.score + 1,
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
        selectedImages: selectedImages
      });
    }    

    console.log(selectedImages);

    this.randomImage();
  }


  randomImage = () => {
    let imgArray = images;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }

    this.setState({
      images: imgArray
    });
  }



  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score}
          topScore={this.state.topScore} />
        <header className="App-header">
        <h1 className="App-title">Clicky Game!</h1>
          <h2 >Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
        <Wrapper>
          <Title>The Simpsons</Title>
          {
            this.state.images.map(image => (
              <Card
                key={image.id}
                id={image.id}
                name={image.name}
                url={image.url}
                clickImage={this.clickImage}

              />
            ))
          }
        </Wrapper>
      </div>


    );
  }
}

export default App;
