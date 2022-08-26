import "./categories.style.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryItem;
