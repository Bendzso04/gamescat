import GameForm from "../../components/gameform/GameForm";

const FormPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center p-8">Add New Game</h1>
      <GameForm />
    </div>
  );
};

export default FormPage;
