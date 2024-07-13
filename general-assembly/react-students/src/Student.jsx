import Name from './Name';
import Bio from './Bio';
import Score from './Score';

function Student({ student }) {
    return (
        <div>
            <span><h2>{student.name}</h2></span>
            <span>{student.bio}</span>
            <div>
                {student.scores.map((score, index) => (<Score key={index} score={score} />))}
            </div>
        </div>
    )
}

export default Student;