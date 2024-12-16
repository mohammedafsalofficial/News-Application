export default function NewsWrapper({ children }) {
  return (
    <div className="bg-gray-100 p-6 md:p-10 lg:p-14 rounded-lg shadow-md max-w-7xl mx-auto my-10">
      {children}
    </div>
  );
}
