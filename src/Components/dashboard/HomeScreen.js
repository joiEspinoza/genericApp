import React from 'react';
import CategoryCards from '../UI/CategoryCards';
import SideBar from '../UI/SideBar';

//////<<<<<------------------------------------------------``

const HomeScreen = () => 
{


    return (


        <div className='row'>


            <div className='col-md-2'>

                <SideBar/>

            </div>


            <div className='col-md-10 Dpadding'>

                <div className="container mt-5 p-1">

                    <div className="row">


                        <CategoryCards/>


                    </div>

                </div>

            </div>


        </div>


    );


};

//////---------------------------------------------->>>>>

export default HomeScreen;