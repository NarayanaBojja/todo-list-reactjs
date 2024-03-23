import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Home.scss';

export const Home = () => {

    return (
        <>
            <header className="heading">
                <h1>TODO List</h1>
            </header>
            <div className="search-box">
            <Form.Control className="seachinpupt" type="text" placeholder="Enter item" />
            <Button className='margin-10' variant="outline-primary">Add Item</Button>
            </div>
        </>
    );
}
