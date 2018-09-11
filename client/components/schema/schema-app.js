import React from 'react';

//components
import SchemaSidebar from './schema-sidebar.js';
import Table from './table.js';

const SchemaApp = props => {
  return (
    <div>
      <h4>SchemaApp!</h4>
      <SchemaSidebar/>
      <Table/>
    </div>
  )
};

export default SchemaApp;