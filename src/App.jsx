import useProducts from "@/hooks/useProducts";

function App() {
  const { products, loading, error } = useProducts();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="p-10">
      <h1 className="mb-5 text-3xl font-bold">
        Total Products: {products.length}
      </h1>

      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

export default App;