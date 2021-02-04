import React from 'react';

import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './cards.styles.css';

export const Cards = props => (

    <div class="card card--fixedWidth">
        <div class="card__description">
            <div class="icon fa fa-flask card__descriptionIcon">Title GBP 1000</div>
                <span>Request Ref NO | <span>Category | B2B</span></span>
                {/* <Card border="light" style={{ width: '16rem' }}>
                    <Card.Header>Request Reference</Card.Header>
                    <Card.Body>
                        <Card.Title>36AAdmkfjjd</Card.Title>
                    </Card.Body>
                </Card> */}
            <div class="card__descriptionText">Payment | </div>
        </div>
    </div>

);


// <div className='card-containe'>
//     Payment Confirmation, GBP 1000
//     <Button variant="outline-secondary">Primary</Button>{' '}
//     <Button variant="outline-secondary">Primary</Button>{' '}
//     <p></p>
// </div>
