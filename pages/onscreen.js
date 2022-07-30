import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewporto, forwardedRef } = props;
  const color = inViewporto ? '#217ac0' : '#ff9800';
  const text = inViewporto ? 'In viewport' : 'Not in viewport';
  return (
    <div className="viewport-block" ref={forwardedRef}>
   
      <div style={{ width: '10px'}} />
    </div>
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Component = (props) => (
  <div>
  
    <ViewportBlock onEnterViewport={() => props.alertval()} onLeaveViewport={() => props.leave()} />
  </div>
)

export default Component