import React from 'react' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    const handleClick = () => 
        alert(`This product will be available soon`);

    return (
        <div style={{display : 'flex', justifyContent : 'center', gap : '50px', margin : '4rem'}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='https://www.bmw.fr/content/dam/bmw/marketFR/bmw_fr/all-models/m-series/m3-sedan/Large-teaser-M3-CS-avec-gradient.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674407672226.jpg' ></Card.Img>
            <Card.Body>
            <Card.Title>BMW M3 </Card.Title>
            <Card.Text>
            La BMW M3 Berline développe une puissance sportive de 480 ch et un couple de 550 Nm. L'association de la propulsion et d'une boîte manuelle M à 6 rapports parfaitement étagée autorise une conduite très dynamique qui fait du véhicule un pur sportif de haut niveau.
            </Card.Text>
            <Button onClick={handleClick} variant="primary" style={{backgroundColor : 'gray', borderColor : 'transparent'}}>Buy Online </Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='https://www.ford.fr/content/dam/guxeu/rhd/central/cars/2018-mustang/launch/galleries/models/ford-mustang-gt.jpg.renditions.extra-large.jpeg' ></Card.Img>
            <Card.Body>
            <Card.Title>Ford Mustang</Card.Title>
            <Card.Text>La Ford Mustang GT V8 5.0 est équipée d'un moteur longitudinal avant huit cylindres en V atmosphérique développant un couple maximum de 529 Nm dès 4600 trs/min et une puissance maximum de 450 ch à 7000 trs/min transmise aux roues arrières de 19 pouces par le biais d'une boite de vitesse manuelle à 6 rapports.            
            </Card.Text>
            <Button onClick={handleClick} variant="primary" style={{backgroundColor : 'gray', borderColor : 'transparent'}}>Buy Online</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg' ></Card.Img>
            <Card.Body>
            <Card.Title>nissan gtr r35</Card.Title>
            <Card.Text>
            The Nissan GT-R (Gran Turismo–Racing; model code: R35; Japanese: 日産・GT-R; Nissan GT-R) is a car built by Japanese marque Nissan since 2007. It has a 2+2 seating layout and is considered both a sports car and a grand tourer. The engine is front-mid mounted and drives all four wheels.
            </Card.Text>
            <Button onClick={handleClick} variant="primary" style={{backgroundColor : 'gray', borderColor : 'transparent'}}>Buy Online</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards ; 