import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Fab } from 'react-mdc-web/lib';
import MaterialIcon from 'material-icons-react';

class Dashboard extends Component {
  render() {
    return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  Minutes of Meeting List
                </CardHeader>
                <CardBody>
                  <nav>
                    <Pagination>
                      <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>
                  <Table hover bordered striped responsive size="lg">
                    <thead>
                    <tr>
                      <th>Date</th>
                      <th>Project Name</th>
                      <th>Minutes</th>
                      <th>Created By</th>
                      <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2018/09/09</td>
                      <td>Sivaganga</td>
                      <td>Meeting</td>
                      <td>Nidhin</td>
                      <td>
                        <Badge color="success">Download</Badge>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Fab className="fab"><MaterialIcon icon="add" color='#FFFFFF'/></Fab>
        </div>
    );
  }
}

export default Dashboard;
