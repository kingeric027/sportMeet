import React, { Component } from 'react';
 


class CommentBox extends Component {
  constructor(props) {
    super(props);
  }

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();
   
    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = this.props.user;
   
    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };
   
      this.props.handleAddComment(commentObject); //have
   
      // Publish comment
      /*global Ably*/
      //const channel = Ably.channels.get('comments');
      //channel.publish('add_comment', commentObject, err => {
      //  if (err) {
      //    console.log('Unable to publish message; err = ' + err.message);
      //  }
      }; //);
   
      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }

 
  render() {
    return (
      <div>
        <h5 className="title">Kindly leave your thoughts below</h5>
        <form >
          <div className="field">
            <div className="control">
              <input type="text" className="input" name="name" placeholder="Your name"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea" name="comment" placeholder="Add a comment"></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CommentBox;