import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './action/getSmurfs';
import Smurf from './smurfCard';

const SmurfList = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.SmurfList.map((smurf, i) => (
        <Smurf key={i} smurf={smurf} />
      ))}
      <button onClick={props.fetchSmurfs}>refresh</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    SmurfList: state.SmurfList,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList);