
let DBData=[];

/*-----------------------functions---------------------------*/
function removeRows() {
    var empTab = document.querySelector('.index_table')
    var rowCnt = empTab.rows.length

    for (var i = rowCnt - 1; i > 0 - 1; i--) {
        if (i > 0)
            document.querySelector('.index_table').deleteRow(i);

    }
}


function showData(user){
    for (var val of user) {

        var { _id,name, description,price,rating } = val
        var empTab = document.querySelector('.index_table')
        var rowCnt = empTab.rows.length // GET TABLE ROW COUNT.
        var tr = empTab.insertRow(rowCnt)
        for (var c = 0; c < 5; c++) {
            var td = document.createElement('td') // TABLE DEFINITION.
            td = tr.insertCell(c)
            if (c == 0) {
                td.innerHTML = name;
            }
            if (c == 1) {
                td.innerHTML = description
            }
            if (c == 2) {
                td.innerHTML = price
            }
           
            if (c == 3) {
                let stars = document.createElement('div')
                let ratings = rating;
                for(let k=0;k<5;k++){
                    let star = document.createElement('span')
                   
                    star.setAttribute('class', 'fa fa-star');
                    if(ratings){
                        star.setAttribute('class', 'fa fa-star checked');
                    ratings--;}
                    stars.appendChild(star)

                }
                td.appendChild(stars)
            }
           
            if (c == 4) {
                var button = document.createElement('a');

                // SET INPUT ATTRIBUTE.
                button.innerHTML = "Add to cart";
                button.setAttribute('class', 'mybutt');
                // ADD THE BUTTON's 'onclick' EVENT.
                /* button.setAttribute('onclick', '#');*/
                button.setAttribute('onclick', 'AddToCart(this)');
                button.setAttribute('id', `${_id}`)
                button.setAttribute('name', `Add`)
                td.appendChild(button);

                

                
            }


        }

    }
}

function search3(event) {
    removeRows()
    
    let searchField = event.value
    const FilteredMonsters = DBData.filter(db=>
        db._id.includes(searchField)||db.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.description.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.price.includes(searchField)          )
         
          showData(FilteredMonsters)
          


}
function Add(event){
    if(localStorage.getItem('token'))
    window.location.href="Form.html"
    else{
        window.location.href="Login.html"
    }
}



function AddToCart(event){
    let searchField = event.id
    const FilteredMonsters = DBData.filter(db=>
        db._id.includes(searchField))
    let obj = FilteredMonsters[0];
    // console.log(obj)
    let cart = JSON.parse(localStorage.getItem('Cart'))
    console.log(cart)
    if(cart){
    const ar = cart.filter(db => db._id.includes(searchField))
    if(ar.length){
        alert("Product already exists")
        
        return
    }
    
    cart.push(obj) 
    localStorage.setItem('Cart',JSON.stringify(cart))
    if(cart.length>2)
    window.location.href = "review.html"
    else {
        alert("Product Added")
    }
}
    else{
        let cart = []
        cart.push(obj)
        localStorage.setItem('Cart',JSON.stringify(cart))
        alert("Product Added")
       
    }
    

}
/*---------------------End Functions--------------------------*/