import Nav from './Nav'
function profile() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex justify-start gap-2 bg-blue-200">
        <div className="bg-blue-600">1</div>
        <div className="bg-blue-600">2</div>
      </div>
    </div>
  )
}

export default profile
