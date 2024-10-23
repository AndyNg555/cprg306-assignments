export default function Item({ name, quantity, category }) {
    return (
        <ul>
        <li className="mb-2">
            Item: {name} 
        </li>
        <li className="mb-2 text-green-700" >
            Quantity: {quantity} 
        </li>
        <li className="mb-2 text-blue-700">
            Category: {category}
        </li>
        </ul>
    );
}