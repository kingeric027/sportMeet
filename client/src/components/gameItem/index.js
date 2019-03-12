
import React from "react";
import { Container, Row, Col } from "../Grid";
import moment from 'moment';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from "../../Auth/authentication";
import './style.css';

// BookList renders a bootstrap list item
export function GameList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function GameListItem(
    props
  ) {
    const currentUser = auth0Client.getProfile().name;
    const GameLink = withRouter(({ history }) => (
      <Link
        onClick={() => { history.push("/find") }}
        to ={"/games/" + props.id}
      >
      
      <h5>{props.user} is Playing {props.sport}</h5>
      </Link>
    ))
    return (
      <li className="list-group-item">
        
          <Row>      
              <GameLink></GameLink>
              <p>Spots Available: {props.players}</p>
              <p>{moment(props.date).format("MMM Do YYYY")}, {moment(props.time, "HH:MM A").format("h:MM A")}</p>
              <p>{props.address}</p>

            {props.playersArray.includes(currentUser) ?( //user is in game
                <button type="button" className="btn btn-outline-success" id={props.id} onClick={props.UpdateFunction}>Leave Game</button>
              ):(
                <button type="button" className="btn btn-outline-success" id={props.id} onClick={props.UpdateFunction}>Join Game</button>
              )}
            <button onClick = {props.DeleteFunction}>Delete</button> 
          </Row>
       
      </li>
    );
  }