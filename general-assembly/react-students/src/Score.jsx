function Score(students) {
    return (
        <div className="score" id={`score-${students.score.date}`}>
            <p>Date: {students.score.date}</p>
            <p>Score: {students.score.score}</p>
        </div>
    )
}

export default Score;