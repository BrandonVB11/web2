import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const movies = [
    {
        id: 1,
        title: "Red Notice",
        diffusion: "16H40"
    },
    {
        id: 2,
        title: "Fast & Furions 10",
        diffusion: "20h00"
    }
];


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
          <th>Film</th>
          <th>title</th>
          <th>D</th>
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
        <td>${movie.title}</td>
        <td>${movie.content}</td>
        <td>${movie.diffusion}</td>
      </tr>`;
    });
  
    return menuTableLines;
  };

  
renderMenuFromString(movies);