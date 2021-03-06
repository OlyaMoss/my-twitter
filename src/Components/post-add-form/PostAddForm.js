import React from 'react';

const PostAddForm = ({onAdd}) => {
    return (
        <div className='bottom-panel d-flex'>
         <input
             type='text'
             placeholder='What are you thinking now?'
             className='form-control new-post-label'
         />
         <button
             type='submit'
             className='btn btn-outline-secondary'
             onClick={()=> onAdd('Hello')}
         >Add</button>
        </div>
    );
};

export default PostAddForm;