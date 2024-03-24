export default function FormHolder({ children }: any) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/2 bg-gradient-to-b from-gray-200 to-blue-200 text-blue-950 text-center p-10 rounded shadow-2xl">
        {children}
      </div>
    </div>
  );
}
