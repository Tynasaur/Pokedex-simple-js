let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){"object"==typeof e&&"name"in e?t.push(e):console.log("pokemon is not correct")}document.querySelector("#spinner");function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.other.dream_world.front_default,t.name=e.name,t.height=e.height,t.weight=e.weight,t.types=[],e.types.forEach(function(e){t.types.push(e.type.name)})})}function a(t){o(t).then(function(){i(t)})}function i(t){const e=$(".modal-body"),n=$(".modal-title");e.empty(),n.empty();const o=$('<img class="modal-img" style="width:50%">');o.attr("src",t.imageUrl);let a=$("<h1>"+t.name+"</h1>");console.log(t.name);let i=$("<p>"+function(t){return t.types.length>1?"Type: "+t.types.join(", "):"Type: "+t.types}(t)+"</p>"),l=$("<p>Height: "+t.height+"m</p>"),s=$("<p>Weight: "+t.weight+"kg</p>");n.append(a),e.append(o),e.append(i),e.append(l),e.append(s),$("pokemonModal").modal("show")}return{add:n,getAll:function(){return t},addListItem:function(t){let e=$("#pokemon-container"),n=$("<li />"),o=$("<button />");o.text(t.name),o.attr("data-target","#pokemonModal"),o.attr("data-toggle","modal"),o.addClass("btn"),o.addClass("btn-danger"),o.addClass("col"),n.addClass("col-12"),n.addClass("col-md-4"),n.addClass("list-group-item-light"),n.addClass("list-group-item"),n.append(o),e.append(n),o.on("click",function(e){a(t),$(".modal-header").css("background-color","rgb(0, 51, 204)")})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};n(e),o(e)})})},loadDetails:o,showDetails:a,showModal:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});