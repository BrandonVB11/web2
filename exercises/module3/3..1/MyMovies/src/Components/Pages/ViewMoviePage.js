import { clearPage } from "../../utils/render";


const movies = [];
  
  movies.push({
    title:"Kleo",
    duree:150,
    Budget:4,
    link:"https://kinepolis.be/fr/?main_section=tous%20les%20films"
  });
  
  
  
  function renderMenuFromString(menu) {
    const menuTableAsString = getMenuTableAsString(menu);
  
    const main = document.querySelector('main');
  
    main.innerHTML += menuTableAsString;
  }
  
  function getMenuTableAsString(menu) {
    const menuTableLines = getAllTableLinesAsString(menu);
    const menuTable = addLinesToTableHeadersAndGet(menuTableLines);
    return menuTable;
  }
  
  function addLinesToTableHeadersAndGet(tableLines) {
    const menuTable = `
    <div class="table-responsive pt-5">
      <table class="table table-danger">
        <tr>
          <th>title</th>
          <th>duree(min)</th>
          <th>Budget(Millions)</th>
        </tr>
        ${tableLines}    
      </table>
    </div>
    `;
    return menuTable;
  };
  
  function getAllTableLinesAsString(menu) {
    let menuTableLines = '';
  
    menu?.forEach((movie) => {
      menuTableLines += `<tr>
        <td><a href='${movie.link}'>${movie.title}</a></td>
        <td>${movie.duree}</td>
        <td>${movie.Budget}</td>
      </tr>`;
    });
  
    return menuTableLines;
  };
  
  const ViewMoviePage = () => {
    clearPage()
    renderMenuFromString(movies);
  };
  
export default ViewMoviePage