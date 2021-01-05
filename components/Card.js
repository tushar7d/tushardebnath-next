export default function Card(props) {
  return (
    <div
      className={`${props.color} rounded-lg p-4  w-full  h-96 xl:col-span-${props.size}`}
    >
      {props.children}
    </div>
  );
}
