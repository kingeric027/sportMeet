import React from "react";
import { Row } from "../Grid";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../../Auth/authentication";
import "./style.css";
import PrimaryButton from "../shared/PrimaryButton";

export function GameList({ children }) {
  return <ul className="list-group game-list">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function GameListItem(props) {
  const currentUser = auth0Client.getProfile().name;

  const Button = () => {
    if (props.playersArray.includes(currentUser)) {
      return (
        <button
          type="button"
          className="btn btn-danger"
          id={props.id}
          onClick={props.UpdateFunction}
        >
          Leave Game
        </button>
      );
    } else if (props.players <= 0) {
      return <PrimaryButton label="Game Full" disabled />;
    } else {
      return (
        <PrimaryButton
          label="Join Game"
          onClick={props.UpdateFunction}
          id={props.id}
        />
      );
    }
  };

  const GameLink = withRouter(({ history }) => (
    <Link
      onClick={() => {
        history.push("/find");
      }}
      to={"/games/" + props.id}
    >
      <h5 className="card-header card-background gameListHeader">
        {props.user} is Playing {props.sport}
      </h5>
    </Link>
  ));
  return (
    <li className="list-group-item">
      <Row>
        <div class="card">
          <GameLink></GameLink>
          <div class="card-body">
            <h5 class="card-title">Spots Available: {props.players}</h5>
            <p>
              {moment(props.date).format("MMM Do YYYY")},{" "}
              {moment(props.time, "HH:MM A").format("h:MM A")}
            </p>
            <p>{props.address}</p>
            <Button></Button>
          </div>
        </div>
      </Row>
    </li>
  );
}
