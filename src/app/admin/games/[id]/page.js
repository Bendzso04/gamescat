export default function Page({ params }) {
  return (
    <div>
      <h1>My Post: {params.id}</h1>
      <img
        src={`data:image/*;base64,${params.id.imageBase64}`}
        alt={params.id.title}
        className="w-20 h-auto mr-3"
      />
    </div>
  );
}
