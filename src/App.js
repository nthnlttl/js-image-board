import React from 'react'

function App() {

  function ImageForm() {
    return(
      <form>
        ...
      </form>
    )
  };

  function ImageList(){
    return(
      <ul>
        ...
      </ul>
    )
  };

  function ImageBoard(){
    return(
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
}
export default App;
