
export default function Main() {
    let cover = "bg-red-50 w-screen h-[88vh] bg-[url('/hero-zom.jpeg')] bg-cover bg-center bg-fixed"
    let container = "mx-auto h-[12vh] scrollbar-hide"
    let grid = "max-w-7xl mx-auto p-4 grid grid-cols-6";
    return (
        <>
            <div className={cover} />
            <div className={container} >
                <div className={grid}>
                    <div className=" col-span-2 ">hello</div>
                    <div className=" col-span-4 ">hello</div>
                </div>
                <div className={grid}>
                    <div className=" col-span-2 ">hello</div>
                    <div className=" col-span-4 ">hello</div>
                </div>
            </div>

        </>

    );
}