export default function Register() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/3 bg-gradient-to-b from-gray-400 to-blue-400 text-blue-950 text-center font-bold p-10 rounded shadow-2xl">
        <form className="flex flex-col gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Enter email addess..."
            className="text-xl shadow rounded w-full focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="text-xl shadow rounded w-full focus:outline-none"
          />
          <button className="bg-blue-800 text-white text-xl w-1/3">
            Register Account
          </button>
        </form>
      </div>
    </div>
  );
}
