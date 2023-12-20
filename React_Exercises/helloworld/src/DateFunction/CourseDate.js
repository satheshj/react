import React from 'react'
import './coursedate.css'
function CourseDate() {




    return (
        <div className='dateContainer'>
            <label>Enter the course start date:</label>
            <input type='date' id='date' onChange={() => {
                let date = document.getElementById('date').value
                let coursedate = new Date(date)
                console.log(coursedate)
                coursedate.setDate(coursedate.getDate() + 90)
                document.querySelector('h1').innerText +=` ${coursedate.toDateString()}`
            }}></input>
            <div className='result'>
                <h1>Course ends at </h1>
            </div>
        </div>
    )
}

export default CourseDate
