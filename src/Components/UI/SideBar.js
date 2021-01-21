import React from 'react';
import CategoryModal from './CategoryModal';

//////<<<<<------------------------------------------------``

const SideBar = () => 
{

    return (

        <>

            <div className="UI__sideBar">

                <div className="UI__iconSideBar pointer" data-bs-toggle="modal" data-bs-target="#categoryModal">

                    <i className="fas fa-crow"></i>

                    <br/>

                    <p className="text-justify">New Category</p>  

                </div>
            
            </div>


            <CategoryModal/>

        </>

        

    );

};

//////---------------------------------------------->>>>>

export default SideBar;
