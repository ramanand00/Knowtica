import '../css/landing.css';
import main from '../assets/LandImg.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>Knowtica</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>🎓 Welcome to <span>Knowtica </span> Your Partner in <span>Academic</span>  Excellence.</p>
                        </div>
                        <div className="caption3">
                            <p>Knowtica is a modern e-learning platform designed for students pursuing BSc.CSIT, BCA, BIT, and related courses.
                            We provide well-organized notes, interactive videos, and smart study resources to make learning easier, faster, and more effective.</p>
                        </div>
                        <div className="btns">
                            <button onClick={() => window.open("#", "_blank", "noopener noreferrer")} type="button" className="btn btn-outline-info">Know More</button>
                            {/* <button type="button" className="btn btn-success" onClick={()=>navigate("/#")}>DONATE</button> */}
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}