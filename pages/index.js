import Card from "../components/Card";
export default function Home() {
  return (
    <div className=" max-w-screen-xl w-screen m-auto h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-8">
        <Card size="2" color="bg-muted-blue"><Intro /></Card>
        <Card size="1" color="bg-muted-green">hello</Card>
        <Card size="1" color="bg-muted-red">red</Card>
        <Card size="2" color="bg-muted-purple">purple</Card>
        <Card size="3" color="bg-muted-yellow">hello</Card>
      </div>
    </div>
  );
}
let Intro = () =>{
  return(
    <div className="h-ful  flex">

      <div className="w-full">hello</div>
      <div className="w-full">hello</div>
    </div>
  )
}
