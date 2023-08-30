const Button = (props) => {
  //  Write your code here.
  const { like, name } = props;

  return (
    <div>
      <button className={like}>{name}</button>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="main-heading">Social Buttons</h1>
    <div className="btn-container">
      <Button like="likeBtn" name="Like" />
      <Button like="commentBtn" name="Comment" />
      <Button like="shareBtn" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
