import React, { Component } from "react";

import "./App.css";
import data from "./Dataset.json";
import { Container,Grid, Card, Icon, Button, Image } from "semantic-ui-react";




class App extends Component {
  buttClick = (adress) => {
    console.log("Butt was clicked");
    let father_gift_num = Math.floor(Math.random() * 3);
    let mother_gift_num = Math.floor(Math.random() * 3);
    let daughter_gift_num = Math.floor(Math.random() * 3);
    alert(
      "Butt was clicked" +
        father_gift_num +
        " " +
        mother_gift_num +
        " " +
        daughter_gift_num
    );
    window.open("www.crea.com.ua", "_blank");
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Grid columns={3} divided>
            <Grid.Row>
              {data.map(function(gifts) {
                return (
                  <Grid.Column>
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
                        <Button adress={gifts.giftlink}> Go to {gifts.person}'s Gitf</Button>
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
