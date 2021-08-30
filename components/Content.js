let Content = () => {
    return (
      <div className="overflow-auto no-scrollbar md:w-1/2">
        <div className="grid grid-cols-1 gap-4 p-4 md:p-8">
          <h1 className="text-xl font-semibold md:mt-24 ">Work</h1>
        <Card
          h="Helping users find the right car"
          dc="Expedia"
          l="https://tushardebnath.notion.site/Helping-users-find-the-right-offer-4140d01adf3343dc98249fdb91d643e2"
        />
        <Card
          h="Order Tracking Re-Imagined"
          dc="Zomato"
          l="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
        />
          <h1 className="text-xl font-semibold md:mt-12 ">Writing</h1>
        <Card
          h="Helping users find the right car"
          dc="Expedia"
          l="https://tushardebnath.notion.site/Helping-users-find-the-right-offer-4140d01adf3343dc98249fdb91d643e2"
        />
        <Card
          h="Order Tracking Re-Imagined"
          dc="Zomato"
          l="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
        />
              <h1 className="text-xl font-semibold md:mt-12 ">Opensource </h1>
        <Card
          h="Helping users find the right car"
          dc="Expedia"
          l="https://tushardebnath.notion.site/Helping-users-find-the-right-offer-4140d01adf3343dc98249fdb91d643e2"
        />
        <Card
          h="Order Tracking Re-Imagined"
          dc="Zomato"
          l="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
        />
        </div>
      </div>
    );
  };
  let Card = (props) => {
    return (
      <a href={props.l ? props.l : "/"} className="w-full " target="_blank">
        <div className="p-4 transition duration-500 ease-in-out bg-white border border-gray-200 rounded-lg md:hover:scale-105 hover:shadow-lg">
          <h1 className="mb-1 font-semibold ">{props.h ? props.h : "Heading"}</h1>
          <p>{props.dc ? props.dc : "description"}</p>
        </div>
      </a>
    );
  };

  export default Content

