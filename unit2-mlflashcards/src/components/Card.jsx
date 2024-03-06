import { useState } from 'react'

// model: "K Nearest Neighbors",
// lectureLink: "https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote02_kNN.html",
// demoLink: "https://vision.stanford.edu/teaching/cs231n-demos/knn/",
// diagram: "https://mlarchive.com/wp-content/uploads/2022/09/img2-3-1024x585.png",
// notes: "",
// assumptions: "",

function Card(props) {

  
  const [flipped, setFlip] = useState(false);

  const flipCard = () => setFlip(!flipped);

  return (
    <div onClick={flipCard} className="rounded-[15px] shadow-sm h-[500px] w-[900px] max-w-[85vw] mx-auto mt-[50px] mb-[30px] bg-cyan-500/60 border-solid border border-white flex items-center justify-center">
      {!flipped ? (
        <div className="m-0 p-0">
          <h1 className="text-[30px] mt-[-60px] m-0 p-0">
            <a className="text-sky-300" href={props.lectureLink}>{props.model}</a>
          </h1>
          <h2 className="m-0 p-0">
            <a href={props.lectureLink}>Lecture</a>, <a href={props.demoLink}>Demo</a>
          </h2>
          <img className="object-scale-down h-[200px] mx-auto pt-5" src={props.diagram}></img>
        </div>
      ) : (
        <div className="my-0 mx-20 p-0">
          <p className="m-0 p-0">
            Notes: {props.notes}
          </p>
          <p className="pt-5 my-0 p-0">
            Assumptions: 
          </p>
            <ol>
              {
                props.assumptions.map((assumption, index) => <li key={index}>{assumption}</li>)
              }
            </ol>
        </div>
      )}
    </div>
  )
}

export default Card
