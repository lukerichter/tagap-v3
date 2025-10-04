import { useEffect, useState } from 'react'
import './DateContent.css'

function DateContent({ preDate, changeDate, setLockDate }) {

    const [day, setDay] = useState(preDate.getDate());
    const [month, setMonth] = useState(preDate.getMonth() + 1)
    const [year, setYear] = useState(preDate.getFullYear())

    useEffect(() => {

        const newDate = new Date(year, month - 1, day)

        const valid = !isNaN(newDate.getTime())
            && newDate.getDate() === Number(day)
            && newDate.getMonth() === Number(month) - 1
            && newDate.getFullYear() === Number(year)

        setLockDate(!valid)

        if (valid) {
            changeDate(newDate)
        }

    }, [day, month, year]);



    return (
        <>

            <p>Enter the date of the test.</p>

            <div className='date-inputs'>

                <div className='day'>
                    Day
                    <input
                        type='text'
                        defaultValue={preDate.getDate()}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </div>

                <div className='month' >
                    Month
                    <input
                        type='text'
                        defaultValue={preDate.getMonth()}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                </div>

                <div className='year'>
                    Year
                    <input
                        type='text'
                        defaultValue={preDate.getFullYear()}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>

            </div>

        </>
    )
}

export default DateContent