
import React from "react";
import { Container, Row, Col } from "../Grid";


// BookList renders a bootstrap list item
export function GameList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  
  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function GameListItem(
    props
  ) {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h5>{props.user} is Playing {props.sport}</h5>
              <p>Spots Available: {props.players}</p>
              <p>{props.time} {props.date}</p>
              <p>{props.address}</p>
              <button type="button" className="btn btn-outline-success" id={props.id}>Join Game</button>
              <button onClick = {props.DeleteFunction}>Delete</button>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }