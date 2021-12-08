import { Card, Button } from "react-bootstrap";
//id, title, description, price, pictureUrl 
const Item = ({key,item}) => {
return (<Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} className='card-img' />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.description}.
                </Card.Text>
                <Button variant="secondary" size="lg">
                Add cart
                </Button>
            </Card.Body>
        </Card>)};
export default Item;