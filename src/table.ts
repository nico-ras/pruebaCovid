

export const fillTable = (data: Array<any>, table: string) => {
    
   let wrapper = document.getElementById(table);
   wrapper.innerHTML = '';

   data.forEach(e => {

    let nameId = e.location.replace(/[^0-9a-zA-Z]/g, '').split(" ").join("")
       wrapper.innerHTML += `<tr>
                               <td>${e.location}</td>
                               <td>${e.confirmed}</td>
                               <td>${e.deaths}</td>
                               <td>${e.recovered}</td>
                               <td>${e.active}</td>
                               <td><button data-toggle="modal" class="modalButton" data-target="#country${nameId}" data-country="${nameId}">ver detalle</button></td>
                               <div class="modal fade" id="country${nameId}"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body${nameId}" >
      <canvas id="modal-body${nameId}"></canvas>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

                             </tr>`
   });

 

}  