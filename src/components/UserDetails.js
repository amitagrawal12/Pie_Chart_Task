import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderTitle from '../common/HeaderTitle';
import ViewTable from '../common/ViewTable';
import {JsonData} from '../common/JsonData';
import { userFetchDetails } from '../redux/userDetails/userSlice';


const UserDetails = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.user?.userList);

    useEffect(() => {
        dispatch(userFetchDetails(JsonData))
    }, [])

  return (
    <>
    <HeaderTitle title={'Redux State managment User details'} />
    <ViewTable tdata={userData} />
    </>
  )
}

export default UserDetails