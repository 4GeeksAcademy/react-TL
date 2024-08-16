import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("yellow"); 
	return (
		<div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
			<div className="position-relative">
				<div className="bg-black position-absolute" style={{width: "10px", height: "140px", top: "-140px", left: "55px"}}></div>
<div id="container" className="traffic-light">
<div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
<div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
</div>
</div>
</div>
	)
}

export default Home
