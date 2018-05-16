
import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'

function Examples ({ lastUpdate, light }) {
  return (
    <div className='main'>
      <h1>Redux [DEMO]</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter className='main' />
      <style>{`
        h1 {
          font-family: Arial;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70vh;
        }
      `}</style>      
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
