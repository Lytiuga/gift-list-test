import React, { Component } from "react";

import "./App.css";
import data from "./Dataset.json";
import { Container,Grid, Card, Icon, Button, Image } from "semantic-ui-react";





class App extends Component {
  constructor(props) {
     super(props);

     // This binding is necessary to make `this` work in the callback
     this.buttClick = this.buttClick.bind(this);
   }


  buttClick = (adress) => {
    console.log("Butt was clicked");

    alert(
      "Butt was clicked" + adress);
    window.open("http://www.crea.com.ua", "_blank");
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Grid columns={3} divided>
            <Grid.Row>
              {data.map(function(gifts) {
                return (
                  <Grid.Column key={gifts.id}>
                    <Card>
                      <Image src={gifts.img_src} />
                      <Card.Content>
                        <Card.Header>{gifts.person}</Card.Header>
                        <Card.Meta>
                          <span>
                            Dreaming about {gifts.gift}, $ {gifts.price} cost
                          </span>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content extra>

                      { /*<Button adress={gifts.giftlink}> Go to {gifts.person}'s Gitf</Button> */}

                       <Button onClick={function() {this.buttClick(gifts.giftlink)}}> Go to {gifts.person}'s Gitf</Button>



                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}

            </Grid.Row>
            <Grid.Row>
            <Button onClick={this.buttClick} adress="www.google.com">
              Working Button
            </Button>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
