let productManager = {
    getAllProducts : function() {
        return database;
    }
};

let domManager = {
    createProductContainer : function (product){
        let product_container = document.createElement("section");
        let pic_container = document.createElement("figure");
        let pic = document.createElement("img");
        let description = document.createElement("article");
        let heading = document.createElement("h3");
        let text = document.createElement("p");
        let btn_container = document.createElement("form");
        let btn_purchase = document.createElement("input");
         
        let main = document.getElementById("product_list");
        main.appendChild(product_container);
        product_container.appendChild(pic_container);
        product_container.appendChild(description);
        product_container.appendChild(btn_container);
        pic_container.appendChild(pic);
        description.appendChild(heading);
        description.appendChild(text);
        btn_container.appendChild(btn_purchase);

        product_container.className = "product_container col-md-3 m-5 shadow p-1 rounded";
//picture
        pic.src = `./pictures/${product.picture}`;
        pic.className = "img-fluid";
        pic.style.height = "250px";
        pic.style.width = "700px";

        heading.innerHTML = `${product.model} - ${product.price} ${product.currency}`.italics().bold();
        text.innerText = product.description;

        btn_purchase.type = "button";
        btn_purchase.value = "Purchase";
        btn_purchase.className = "btn btn-outline-primary";

    }
}

document.addEventListener("DOMContentLoaded", function () {
    let products = productManager.getAllProducts();
  products.forEach(
      function (product) {
          domManager.createProductContainer(product);
      }
  )
});