import React from "react"

export default class Enthusiasm extends React.Component {
  render() {
    const { enthusiasm, onIncrement, onDecrement } = this.props
    return (
      <div className="myDiv">
        <h1>Redux [DEMO]</h1>
        <div className="greeting">
          Hello. Are you excited?{this.getExclamationMarks(
            enthusiasm.enthusiasmLevel
          )}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        <pre>{JSON.stringify(this.props)}</pre>
        <style>{`
        img {
          width: 300px;
          height: 300px;
          }
        h1 {
          font-family: Arial;
        }
        .myDiv {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>
      </div>
    )
  }

  getExclamationMarks(numChars) {
    return Array(numChars + 1).join("!")
  }
}
