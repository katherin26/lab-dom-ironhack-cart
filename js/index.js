// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price > span').innerText)
  const quantity = Number(product.querySelector('.quantity > input').value)
  let subtotal = product.querySelector('.subtotal > span')
  subtotal.innerHTML = price * quantity 
  return price*quantity
  }

 // ITERATION 2
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  console.log(allProduct)

  updateSubtotal(singleProduct);

  //ITERATION 3
  const allProduct = document.querySelectorAll('.product');//
  let netTotal = 0;
  for(let singleProduct of allProduct){
    let subtotal = updateSubtotal(singleProduct);
    netTotal += subtotal
  }
  document.querySelector('#total-value > span'.innerHTML = netTotal)

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
