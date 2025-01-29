import ReactPlayer from "react-player";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">🎥 Video Player</h1>
      <div className="p-4 -pt-4 rounded-2xl bg-amber-300 bg-blend-screen shadow-lg max-w-xl w-full">
        <ReactPlayer
          url="https://cdn.pixabay.com/video/2024/11/07/240320_tiny.mp4"
          controls={true}
          width="100%"
          height="360px"
          playing={true}
          loop={true}
        />
      </div>
    </div>
  );
}

export default App;
