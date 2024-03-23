import Table from 'react-bootstrap/Table';
import './TodoList.scss';

export const TodoList = () => {
    return (
        <>
            <Table className="todo-table" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className='width-10'>ID</th>
                        <th>Name</th>
                        <th className='width-10'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test1</td>
                        <td><i className="bi bi-trash"></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Test2</td>
                        <td><i className="bi bi-trash"></i></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}