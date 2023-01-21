const HomeView = ({
  information
}: {
  information: Record<string, string>
}) => {
  return (
    <>
      <div style={{ marginBottom: '10px'}}>
        <h1>{information.title}</h1>
        <h2>{information.subtitle}</h2>
      </div>
      <p>{information.body}</p>
    </>
  )
}

export default HomeView