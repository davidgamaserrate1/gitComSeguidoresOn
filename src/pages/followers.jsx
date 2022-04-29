import React, { useContext } from 'react';

import Container from '../components/container';
import FollowerPic from '../components/followerPic';
//import Followers from '../components/followers';



import { context } from '../context';


const Followers = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <FollowerPic followers={ctx.followers} nameProfile={ctx.userData.login}>
                {console.log(ctx.followers)}
            </FollowerPic>

        </Container>
    );

}
//	<Follower > p ={ctx.login}</Follower>

export default Followers;

