import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const projects = this.props.projects;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1', color: '#fff' }}>
                Project List
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="lg">
                  <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>PROJECT NAME</th>
                  </tr>
                  </thead>
                  <tbody>
                  {projects.map((project, index) => {
                    return(
                      <tr key={project.id}>
                        <td>{index + 1}</td>
                        <td>{project.name}</td>
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

export default ProjectList;
