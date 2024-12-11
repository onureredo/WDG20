function Products({ title, description, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>$: {price}</p>
    </div>
  );
}

export default Products;
