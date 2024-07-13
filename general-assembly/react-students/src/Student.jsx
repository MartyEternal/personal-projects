import Name from './Name';
import Bio from './Bio';
import Score from './Score';

function Student({ student }) {
    return (
        <div className="student">
            <div className="left">
                <span className="name"><h2>{student.name}</h2></span>

            </div>
            <div className="right">
                <span className="bio">{student.bio}</span>
                <span className="score">
                    {student.scores.map((score, index) => (<Score key={index} score={score} />))}
                </span>
            </div>
        </div>
    )
}

export default Student;