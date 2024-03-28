export default function FormHolder({ children }: any) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/2 text-blue-950 bg-gray-200 text-center p-8 pb-4 rounded shadow-2xl">
        {children}
      </div>
    </div>
  );
}
