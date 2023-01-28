export default function Page() {
  return (
    <div className="home-content-container">
      <div className="w-full px-3 mx-auto mt-24 font-serif text-center text-8xl">
        Hello Everyone!
      </div>
      <section className="home-content-section ">
        <div className="flex items-center justify-between p-6 mb-4 bg-blue-100 rounded-2xl ">
          <div>
            <h2 className="mb-2 font-serif text-3xl ">I am Tushar</h2>
            <div className="w-3/4 text-xl font-light text-left ">
              a product designer and technologist with over 9 years of
              experience building products across various industries and
              demographies.
            </div>
          </div>

          <img src="./images/td.png" className="w-[180px]" />
        </div>
        <div className="flex items-center justify-between p-6 mb-4 bg-green-100 rounded-2xl ">
          <div>
            <h2 className="mb-2 font-serif text-3xl ">I specialize in</h2>
            <div className="w-3/4 text-xl font-light text-left ">
            developing new initiatives for 
            </div>
          </div>

          <img src="./images/td.png" className="w-[180px]" />
        </div>
        <div className="p-6 bg-yellow-100 rounded-2xl h-[250px] mb-4">
          I specialize in launching new initiatives
        </div>
        <div className="p-6 bg-yellow-100 rounded-2xl h-[250px] mb-4">
          I currently work for Revolut and I have previously worked at Expedia,
          Zomato(Indian Unicorn), MakeMyTrip, Hike and more{" "}
        </div>
        <div className="p-6 bg-green-100 rounded-2xl h-[250px] mb-4">
          I Live in New Delhi with my wife priya
        </div>
        <div className="p-6 bg-blue-100 rounded-2xl h-[250px] mb-4">
          When I am not working
        </div>
      </section>
    </div>
  );
}
