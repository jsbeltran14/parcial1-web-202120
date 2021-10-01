

export const getTable = (gif) => {
  return `
    <div class="container detail-container table table-dark">
    <table>

  
    <tr>
        <td>${gif.id}</td>
        <td >${gif.first_name}</td>
        <td >${gif.last_name}</td>
    </tr>
    
    </table>
    </div>
    `;
};
