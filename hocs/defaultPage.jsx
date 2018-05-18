// This higher order component (HoC) simply takes in a Page component and returns the enhanced component
export default Page => class DefaultPage extends React.Component {
  render () {
    return (
      <div>
        {/* IDEA: Consider using styled divs from styled-components */}
        <Page {...this.props} />
      </div>
    )
  }
}