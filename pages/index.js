export default function Page() {
  return (
    <div className="md:flex overflow-hidden">
      <section className=" md:w-1/2 h-[70vh] md:h-screen">
        <div className="p-12 mt-12">
          <h1 className=" text-4xl md:text-5xl  font-semibold font-mono leading-snug">
            TUSHAR DEBNATH
          </h1>
          <h3 className=" text-3xl md:text-4xl font-light mt-3 ">
           Product designer and developer from New Delhi.
          </h3>
          <p></p>
        </div>
      </section>

      <section className=" md:w-1/2 p-12 h-screen overflow-scroll scrollbar-hide  ">
        <section className="grid  grid-cols-2  gap-8">
          <div className="   p-4 h-[450px] col-span-2   rounded-3xl col ">
            Card 1
          </div>
          <div className="  p-4  h-[450px] col-span-1   rounded-3xl col ">
            Card 2
          </div>
          <div className=" p-4  h-[450px] col-span-1   rounded-3xl col ">
            Card 3
          </div>
        </section>
      </section>
    </div>
  );
}
