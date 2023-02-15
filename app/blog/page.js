export default async function Page() {
  return (
    <>
      <div className=" max-w-[1000px] mx-auto w-full prose pt-12 px-3">
        <div class=" min-h-screen flex items-center justify-center px-16">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-[150px] h-[150px] bg-purple-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob blur-xl"></div>
            <div class="absolute top-0 -right-[150px]  w-[150px] h-[150px] bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 blur-xl"></div>
            <div class="absolute top-0 -right-10  w-[130px] h-[150px] bg-pink-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 blur-xl"></div>
            <div class="absolute top-0 -left-24 w-[150px] h-[150px] bg-red-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob blur-xl"></div>
            <div class="absolute -bottom-8 left-[180px]  w-[150px] h-[150px] bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 blur-xl"></div>
            <div class="absolute -bottom-8 left-[210px]  w-[150px] h-[150px] bg-pink-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-4000 blur-xl"></div>
            <div class="m-8 relative space-y-4">
              <div className="font-serif text-5xl font-medium ">The Blog Experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
