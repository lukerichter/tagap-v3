import './Navigation.css'





function Navigation({ nextAllowed, nextFunction, prevFunction }) {

    return (
        <div className="navbox">
            {prevFunction && (
                <button
                    className="button navbox--prev"
                    onClick={() => prevFunction()}
                >
                    Previous
                </button>
            )}

            {nextFunction && (
                <button
                    className="button navbox--next"
                    onClick={() => nextFunction()}
                    disabled={!nextAllowed}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default Navigation