const GameForm = () => {
  return (
    <div>
      <form
        action="/submit"
        method="post"
        enctype="multipart/form-data"
        className="bg-[#283347] p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label for="title" className="block text-white-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            for="publisher"
            className="block text-white-700 font-bold mb-2"
          >
            Publisher:
          </label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="release_date"
            className="block text-white-700 font-bold mb-2"
          >
            Release Date:
          </label>
          <input
            type="date"
            id="release_date"
            name="release_date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label for="image" className="block text-white-700 font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
