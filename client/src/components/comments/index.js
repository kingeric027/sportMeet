import React from "react";

// BookList renders a bootstrap list item
export function CommentList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function CommentListItem(
    props
  ) {
    return (
      <li className="list-group-item">
          
        <p>{props.user} + ":" </p>
        <p>{props.text}</p>

      </li>
    );
  }