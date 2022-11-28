const Title = ({ title, url }) => {
  return (
    <div>
      <p>{title}</p>
      <a href={url}>Read more</a>
    </div>
  );
};

export default Title;
