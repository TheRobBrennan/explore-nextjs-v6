import Header from '../components/Header/Header'

export default props => {
  const mainHeading = props.title || 'PING'

  return (
    <div>
      <Header />
      <div className="content">
        <h1>{mainHeading}</h1>
        <pre>{JSON.stringify(props)}</pre>
      </div>
      <style>{`
        img {
          width: 300px;
          height: 300px;
          }
        h1 {
          font-family: Arial;
        }
        .content {
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
