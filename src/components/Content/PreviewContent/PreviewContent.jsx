
import { MdErrorOutline } from "react-icons/md";
import './PreviewContent.css'


function ErrorBox({ row, col, val }) {
    return (
        <div className="error">
            <div>{row}</div>
            <div>{col}</div>
            <div>{val}</div>
        </div>
    )
}

function ErrorHeader() {
    return (
        <div className="error-header">
            <div>Row</div>
            <div>Column</div>
            <div>Value</div>
        </div>
    )
}

function ErrorList({ errors }) {
    return (
        <>
            <div className="header">
                <MdErrorOutline />
                <p>Please fix the following errors and restart the process (reload page / press F5):</p>
            </div>

            <div className="error-box">

                {errors && <ErrorHeader />}

                <div className="scroll-box">
                    {errors &&
                        errors.map((err, i) =>
                            <ErrorBox
                                key={i}
                                row={err.row}
                                col={err.col}
                                val={err.val}
                            />)
                    }
                </div>

            </div>
        </>
    )
}


function PreviewContent({ errors }) {
    return (
        <>
            {errors.length > 0 ? (
                <ErrorList errors={errors} />
            ) : (
                <p className="noerror-p">No Errors found :)</p>
            )}
        </>
    )
}

export default PreviewContent