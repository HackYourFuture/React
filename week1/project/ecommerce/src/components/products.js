import './products.css';

function Product(item) {
    return (
        <li class="products--item">
            <div class="product">
                <img class="product--image" alt={item.id} src={item.image}/>
                <span class="product--title" title={item.title}>{item.title}</span>
            </div>
        </li>
    )
}

export default function Products(list) {
  return (
<ul class="products">
{
    list.map(item=>Product(item))
}
</ul>)
}


