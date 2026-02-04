import React from 'react';
import './EvidenceTable.css';

const EvidenceTable = ({ documents }) => {
  const getStatusClass = (status) => {
    return status === 'Approved' ? 'approved' : 'pending';
  };

  return (
    <div className="evidence-table-container">
      <table className="evidence-table">
        <thead>
          <tr>
            <th>
              Document Number
              <span className="sort-icon">↕</span>
            </th>
            <th>
              Document Name
              <span className="sort-icon">↕</span>
            </th>
            <th>
              Document Lead
              <span className="sort-icon">↕</span>
            </th>
            <th>
              Document Preparer
              <span className="sort-icon">↕</span>
            </th>
            <th>
              Date
              <span className="sort-icon">↕</span>
            </th>
            <th>
              Due Date
              <span className="sort-icon">↕</span>
            </th>
            <th>
              Status
              <span className="sort-icon">↕</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.number}</td>
              <td className="doc-name">{doc.name}</td>
              <td>{doc.lead}</td>
              <td>{doc.preparer}</td>
              <td>{doc.date}</td>
              <td>{doc.dueDate}</td>
              <td>
                <span className={`status-badge ${getStatusClass(doc.status)}`}>
                  {doc.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvidenceTable;

