import React from 'react'
import PropTypes from 'prop-types'

export default function NewOperations(props) {
  return (
    
      <div className="InProgressPan">
        <div className="card">
          <div className="card-header">
          {props.Header}
          </div>
          <div className="Alerts-panel">
          <div className="Inner-Box">
            <div className="Inner-box-header">
              Inner Box
            </div>
            <div className="card-body">
              This is where you can display your data.
            </div>
          </div>
        </div>
      
    </div>
    </div>
  );
};
