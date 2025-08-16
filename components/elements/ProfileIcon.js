'use client'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {imageContainerStyles, userImageStyles} from '../buttons/loginStyles'
import { Dropdown } from 'react-bootstrap';
import { signOut } from 'next-auth/react';
import { isAdmin } from '@/utils/modFns';

export default function ProfilePic() {
    const {data, status} = useSession()
    const router = useRouter()

    if (status === 'authenticated') {
        const admin = isAdmin(data.user.email) 
        return ( // this is the lil profile component
            <div style={imageContainerStyles}>
                    <Dropdown>
                    <Dropdown.Toggle as="div" id="dropdown-custom-components">
                        <img style={userImageStyles} src={data.user.image} alt={data.user.name + ' photo'} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item disabled> {data.user.name} </Dropdown.Item>
                        <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
                         <Dropdown.Item onClick={() => router.push('/ecyFavGrids')}>Ecy's Favorites</Dropdown.Item>
                        {admin && <Dropdown.Item onClick={() => router.push('/mod')}>Mod</Dropdown.Item>}
                        {admin && <Dropdown.Item onClick={() => router.push('/')}>Home</Dropdown.Item>}
                        {admin && <Dropdown.Item onClick={() => router.push('/profile')}>Profile Page [DRAFT]</Dropdown.Item>}
                    </Dropdown.Menu>
                    </Dropdown>
            </div>
        )}
    return( <></>

    )}