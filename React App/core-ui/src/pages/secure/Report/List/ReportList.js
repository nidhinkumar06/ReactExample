import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


class ReportList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const reports = this.props.reports;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1', color: '#fff' }}>
                 Report List
              </CardHeader>
              <CardBody>
                <nav style={{float: 'right'}}>
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
                    <th>S.NO</th>
                    <th>PROJECT NAME</th>
                    <th>WEEK</th>
                    <th>YEAR</th>
                    <th>URL</th>
                  </tr>
                  </thead>
                  <tbody>
                  {reports.map((report, index) => {
                    console.log('report is', report);
                    return(
                      <tr key={report.id}>
                        <td>{index + 1}</td>
                        <td>{report.projectName}</td>
                        <td>{report.week}</td>
                        <td>{report.year}</td>
                        <td>
                          <a href={report.url} target="_blank" className="btn btn-primary active" role="button">Click here to view</a>
                        </td>
                      </tr>
                    );
                  })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}

export default ReportList;
