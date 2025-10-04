import './Navigation.css'





function Navigation({ nextAllowed, prevAllowed, nextFunction, prevFunction}) {

    return (
        <div className="navbox">
            {prevFunction && (
                <button
                    className="button navbox--prev"
                    onClick={() => prevFunction()}
                    disabled={!prevAllowed}
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