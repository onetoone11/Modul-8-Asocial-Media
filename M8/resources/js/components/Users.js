import React from 'react';

export default function Users(){

    return(
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 pt-5 mt-5 users--section">
                        <h3 className="text-center pb-3">Manage Users</h3>
                        <div className="text-center pb-5">
                            <input style={{width: '300px', height: '40px'}} type="search" placeholder="Search..." />
                        </div>

                        <div className="">
                            <div className="row p-2">
                                <div className="col-lg-3">Username</div>
                                <div className="col-lg-3">Role</div>
                                <div className="col-lg-2">Created</div>
                                <div className="col-lg-4">
                                    
                                </div>
                            </div>
                        </div>

                        {/* Users-row */}
                        <div className="">
                            <div className="row users--row bg--light p-2">
                                <div className="col-lg-3">Matilda Jönsson</div>
                                <div className="col-lg-3">User</div>
                                <div className="col-lg-2">20/2-2022</div>
                                <div className="col-lg-4">
                                    <button className="btn--deleteUser border-r c-red" style={{float: 'right'}}>Delete</button>
                                    <button className='btn--admin border-b c-black mr-3' style={{float: 'right'}}>Admin</button>
                                </div>
                            </div>
                        </div>
                        {/* Users-row */}
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>

        </>
    )
}