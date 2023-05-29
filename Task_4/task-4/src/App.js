import React, { useState } from "react"
import palletes from "./pallete.json"
import './css/App.css'
import './css/CustomPagination.css'

function App() {
  const [current, setCurrent] = useState(1)
  const [count, setCount] = useState(8)


  const [activePg, setActivePg] = useState(1)
  const [value, setValue] = useState('')

  const last = current * count;
  const first = last - count;

  const filteredBlogs = palletes.slice(first, last).filter(blog => { return blog.title.toLowerCase().includes(value.toLowerCase()) })

  const buttonCount = []
  for (let i = 1; i <= Math.ceil(palletes.length / count); i++) {
    buttonCount.push(i)
  }


  const handleClick = (i) => {
    setCurrent(i)
    setActivePg(i)
  }

  return (
    <div>
      <header>
        <p className="title-main">
          The latest writings from our team
        </p>
      </header>
      <header>
        <p className="title">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </header>
      <div className="palletes">
        <form>
          <input className="search" type="text" placeholder="Search blog..." onChange={(event) => setValue(event.target.value)} />
        </form>
      </div>
      <div class="palletes">
        {
          filteredBlogs.map((val, i) =>
            < div key={i} >
              <div class="colors">
                <img className="image" src={val.thumbnailUrl}></img>
              </div>
              <div>
                <text className="title-blog">
                  {val.title}
                </text>
              </div>
              <label className="title-content">
                {val.title}
              </label>

            </div>
          )
        }
      </div>
      <button key="btnPrevious">Previous</button>
      {
        buttonCount.map((btn) =>
          <button key={btn} className={btn === activePg ? "active" : ""} onClick={() => handleClick(btn)}>{btn}</button>
        )
      }
      <button key="btnNext" >Next</button>

    </div >
  )
}

export default App;
