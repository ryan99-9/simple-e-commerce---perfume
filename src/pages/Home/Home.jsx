import React from 'react'
// import { background } from '../../asset/index'
import NavigationBar from '../../component/navigationBar'
import Axios from 'axios'
import { Carousel, Card, Button } from 'react-bootstrap'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: [],
            whislist: false,
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:2000/slider')
            .then(res => {
                this.setState({ carousels: res.data })
            })
        Axios.get('http://localhost:2000/products')
            .then(res => {
                this.setState({ products: res.data })
            })
        console.log(this.state.products)

    }
    render() {
        console.log(this.state.carousels)

        return (
            <div>
                {/* <img style={style.img}
                    src={background} alt='background' /> */}
                <NavigationBar />
                <div className='carousel'>
                    <Carousel>
                        {this.state.carousels.map(item => {
                            return (
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block imgCarousel"
                                        src={item.image}
                                        alt="First slide"
                                    />
                                    {/* <Carousel.Caption className='captionCar'>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
                <div style={{marginTop:'220px',padding:'40px',marginBottom:'20px'}}>
                    <h2>Special Product</h2>
                </div>
                <div className='product'>
                    {this.state.products.map(item => {
                        return (
                            <Card style={{ width: '18rem', marginBottom: '30px' }}>
                                <Card.Img variant="top" src={item.images} />
                                <Card.Body>
                                    <Card.Title className='cardText'>{item.brand} {item.name}</Card.Title>
                                    <Card.Text className='cardText'>
                                        {item.colour}
                                    </Card.Text>
                                    <Card.Text className='cardText'>
                                        IDR {item.price.toLocaleString()}
                                    </Card.Text>
                                    <Card.Text className='cardText'>
                                       Stock {item.stock}
                                    </Card.Text>
                                    <div className='cardButton'>
                                        <p onClick={()=>this.setState({whislist:true})}>{this.state.whislist? <i class="fas fa-heart"></i>:<i class="far fa-heart"></i>}</p>
                                        <p style={{marginLeft:'20px'}}><i class="fal fa-shopping-cart"></i></p>
                                        {/* <Button  
                                        style={{backgroundColor:'white',border:'none',color:'black'}}>
                                            </Button>
                                        <Button style={{backgroundColor:'white',border:'none',color:'black'}}></Button> */}
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}
// const style = {
//     img: {
//         width: '40vw',
//         height: '100vh',
//         marginTop: '50px'

//     },
//     backGround: {
//         backgroundColor: 'blue',
//         display: 'flex',
//         justifyContent: 'center'
//     }
// }
export default Home