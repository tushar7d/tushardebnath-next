export default function Home() {
  return (
    <div className="max-w-4xl p-3 mx-auto ">
      <h1 className="mt-3 mb-2 text-6xl font-semibold text-center">Mindcast</h1>
      <p className="text-xl text-center">
        A blog about everything and nothing!
      </p>

      <div className="mt-12 space-y-3 ">
        <div className="flex items-center p-4 bg-white rounded-2xl hover:cursor-pointer hover:text-yellow-500 md:max-w-[75%] mx-auto ">
          <div className="ml-3">
            <div className="text-gray-500 ">Medium</div>
            <div className="text-xl font-medium ">
              How I created a Figma plugin to automate our design system
              migration.
            </div>
            <div className="mt-3 text-sm text-gray-500">
              Apr 7, 2020 · 2 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
