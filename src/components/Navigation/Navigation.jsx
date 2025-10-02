import './Navigation.css'

function Navigation({ stage, setStage }) {
    return (
        <div className="navbox">
            {stage > 0 && (
                <button
                    className="button navbox--prev"
                    onClick={() => setStage(stage - 1)}
                >
                    Previous
                </button>
            )}

            {stage < 3 && (
                <button
                    className="button navbox--next"
                    onClick={() => setStage(stage + 1)}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default Navigation