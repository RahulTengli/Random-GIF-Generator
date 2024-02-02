import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
  <div className="w-full h-full flex flex-col background overflow-y-hidden">
      <div className="bg-white m-10 mx-[100px] p-5 text-center text-3xl font-bold rounded-lg">
        <h1 className="uppercase">Random Gifs</h1>
      </div>
      
    <div className="flex flex-col w-1/2 mx-auto">
      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  </div>);
}
