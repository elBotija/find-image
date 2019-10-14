import React, {useState, useEffect} from 'react';
import './app.scss'
import Form from './components/Form'
import Images from './components/Images'

function App() {
  const [getSearch, setSearch] = useState('')
  const [getData, setData] = useState('')
  const [getPage, setPage] = useState(1)
  const [getTotalPages, setTotalPages] = useState(1)


  
  useEffect( () => {
    const getApi = async () => {
      let apiKey = '13869945-f3cf8394b512123b517515782';
      let imgs = 30
      let url = `https://pixabay.com/api/?key=${apiKey}&q=${getSearch}&per_page=${imgs}&page=${getPage}`
      let data = await fetch(url).then((res) => ( res.json() ))
      setData(data.hits)
      setTotalPages(Math.ceil( data.totalHits / imgs))

      const goToUp = document.querySelector('.App')
      goToUp.scrollIntoView('smooth','start')
    }
    if(getSearch.length){
      getApi()
    }
  },[getSearch, getPage])

  const prevPage = () => {
    if(getPage > 0){
      let goToPage =  getPage - 1
      setPage(goToPage)
    }
  }
  const nextPage = () => {
    if(getPage < getTotalPages){
      let goToPage =  getPage + 1
      setPage(goToPage)
    }
  }
  const _showPageButtons = () => {

    if(getData.length){
      return(
        <React.Fragment>
          <button className="btn waves-effect waves-light" onClick={prevPage}>Anterior</button>
          <button className="btn waves-effect waves-light" onClick={nextPage}>Siguiente</button>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="App">
      <Form setSearch={setSearch}/>
      <Images data={getData}/>
      { _showPageButtons()}
    </div>
  );
}

export default App;
