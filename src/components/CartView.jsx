import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'

const CartView = () => {
    return (
        <div>
            <ListGroup as="ul" >
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Article 1
                    </div>
                    <Badge variant="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Article 2
                    </div>
                    <Badge variant="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default CartView
