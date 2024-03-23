export default function FormHolder({ children }: any) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/3 bg-gradient-to-b from-gray-400 to-blue-400 text-blue-950 text-center font-bold p-10 rounded shadow-2xl">
        {children}
      </div>
    </div>
  );
}
